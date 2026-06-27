import type { Session } from "@supabase/supabase-js";
import { getSupabase } from "@/lib/supabase/client";
import type { MemberAccessState } from "./types";

const defaultState: MemberAccessState = {
  hasSession: false,
  hasProfile: false,
  onboardingComplete: false,
  applicationStatus: "none",
};

export async function fetchMemberAccessState(
  session: Session | null,
): Promise<MemberAccessState> {
  if (!session) {
    return defaultState;
  }

  try {
    const supabase = getSupabase();
    const { data: profile } = await supabase
      .from("profiles")
      .select("onboarding_complete")
      .eq("user_id", session.user.id)
      .maybeSingle();

    return {
      hasSession: true,
      hasProfile: profile !== null,
      onboardingComplete: profile?.onboarding_complete ?? false,
      applicationStatus: profile ? "approved" : "none",
    };
  } catch {
    return {
      hasSession: true,
      hasProfile: false,
      onboardingComplete: false,
      applicationStatus: "none",
    };
  }
}
