import type { AuthError } from "@supabase/supabase-js";

/** Maps raw Supabase auth errors to discreet, member-facing copy. */
export function toAuthMessage(error: AuthError | Error | null): string {
  if (!error) return "Something went wrong. Please try again.";

  const message = error.message.toLowerCase();

  if (message.includes("invalid login credentials")) {
    return "That email or password isn't right.";
  }
  if (message.includes("email not confirmed")) {
    return "Confirm your email first — check your inbox.";
  }
  if (message.includes("user already registered")) {
    return "An account already exists for this email.";
  }
  if (message.includes("email rate limit") || message.includes("rate limit")) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  if (message.includes("network") || message.includes("fetch")) {
    return "Connection issue. Check your network and try again.";
  }
  if (message.includes("password")) {
    return error.message;
  }

  return error.message || "Something went wrong. Please try again.";
}
