"use server";

import { createAdminClient } from "@suggaplay/supabase/admin";
import { createAnonClient } from "@suggaplay/supabase/anon";
import type { ApiResponse } from "@suggaplay/types";
import { waitlistSchema, type WaitlistFormInput } from "@/lib/waitlist-schema";

export type { WaitlistFormInput };

type WaitlistRow = {
  name: string;
  email: string;
  city: string;
  gender: "man" | "woman";
};

async function insertWaitlistEntry(row: WaitlistRow) {
  const hasAnon =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const hasServiceRole = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Server-side insert: prefer service role (bypasses RLS; works even if anon policy
  // is missing on remote). Fall back to anon when only public keys are configured.
  const clients: Array<"service" | "anon"> = hasServiceRole
    ? hasAnon
      ? ["service", "anon"]
      : ["service"]
    : hasAnon
      ? ["anon"]
      : [];

  for (const kind of clients) {
    const supabase =
      kind === "service" ? createAdminClient() : createAnonClient();
    const { error } = await supabase.from("waitlist_entries").insert(row);

    if (!error) {
      return { ok: true as const };
    }

    if (error.code === "23505") {
      return { ok: false as const, duplicate: true as const, error };
    }

    console.error(`[waitlist] ${kind} insert failed:`, error.code, error.message);
  }

  if (clients.length === 0) {
    console.error(
      "[waitlist] missing env: set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY (and/or SUPABASE_SERVICE_ROLE_KEY)",
    );
  }

  return {
    ok: false as const,
    duplicate: false as const,
    error: new Error("Waitlist is not configured"),
  };
}

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
    const row: WaitlistRow = {
      name: parsed.data.name.trim(),
      email: parsed.data.email.toLowerCase().trim(),
      city: parsed.data.city.trim(),
      gender: parsed.data.gender,
    };

    const result = await insertWaitlistEntry(row);

    if (result.ok) {
      return { success: true, data: { email: row.email } };
    }

    if (result.duplicate) {
      return {
        success: false,
        error: "This email is already on the waitlist.",
      };
    }

    return {
      success: false,
      error: "Unable to join the waitlist. Please try again.",
    };
  } catch (err) {
    console.error("[waitlist]", err);

    return {
      success: false,
      error: "Unable to join the waitlist. Please try again.",
    };
  }
}
