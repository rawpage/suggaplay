"use server";

import { z } from "zod";
import { createAdminClient } from "@suggaplay/supabase/admin";
import type { ApiResponse } from "@suggaplay/types";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  gender: z.enum(["man", "woman"], {
    message: "Please select how you identify",
  }),
});

export type WaitlistFormInput = z.infer<typeof waitlistSchema>;

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
    const supabase = createAdminClient();

    const { error } = await supabase.from("waitlist_entries").insert({
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      gender: parsed.data.gender,
      city: "London",
    });

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          error: "This email is already on the waitlist.",
        };
      }
      return {
        success: false,
        error: "Unable to join the waitlist. Please try again.",
      };
    }

    return { success: true, data: { email: parsed.data.email } };
  } catch {
    return {
      success: false,
      error: "Unable to join the waitlist. Please try again.",
    };
  }
}
