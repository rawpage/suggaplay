"use server";

import { createAnonClient } from "@suggaplay/supabase/anon";
import type { ApiResponse } from "@suggaplay/types";
import { waitlistSchema, type WaitlistFormInput } from "@/lib/waitlist-schema";

export type { WaitlistFormInput };

export async function submitWaitlistAction(
  input: WaitlistFormInput,
): Promise<ApiResponse<{ email: string }>> {
  const parsed = waitlistSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid form data",
    };
  }

  try {
    const supabase = createAnonClient();

    const { error } = await supabase.from("waitlist_entries").insert({
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      city: parsed.data.city,
      gender: parsed.data.gender,
    });

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          error: "This email is already on the waitlist.",
        };
      }

      console.error("[waitlist]", error.code, error.message);

      return {
        success: false,
        error: "Unable to join the waitlist. Please try again.",
      };
    }

    return { success: true, data: { email: parsed.data.email } };
  } catch (err) {
    console.error("[waitlist]", err);

    return {
      success: false,
      error: "Unable to join the waitlist. Please try again.",
    };
  }
}
