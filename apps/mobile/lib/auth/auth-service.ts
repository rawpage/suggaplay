import * as Linking from "expo-linking";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { toAuthMessage } from "./errors";

export type AuthResult = { ok: true } | { ok: false; message: string };

const CONFIG_ERROR =
  "Supabase is not configured. Add apps/mobile/.env.local and restart.";

/** Deep link the auth emails redirect back to (suggaplay://auth-callback). */
export function authRedirectTo() {
  return Linking.createURL("auth-callback");
}

/** Reset emails carry a marker so the handler routes to set-new-password. */
export function passwordResetRedirectTo() {
  return Linking.createURL("auth-callback", { queryParams: { type: "recovery" } });
}

export async function signInWithPassword(
  email: string,
  password: string,
): Promise<AuthResult> {
  if (!isSupabaseConfigured()) return { ok: false, message: CONFIG_ERROR };

  try {
    const { error } = await getSupabase().auth.signInWithPassword({
      email,
      password,
    });
    if (error) return { ok: false, message: toAuthMessage(error) };
    return { ok: true };
  } catch (error) {
    return { ok: false, message: toAuthMessage(error as Error) };
  }
}

export async function signUpWithPassword(
  email: string,
  password: string,
): Promise<AuthResult> {
  if (!isSupabaseConfigured()) return { ok: false, message: CONFIG_ERROR };

  try {
    const { error } = await getSupabase().auth.signUp({
      email,
      password,
      options: { emailRedirectTo: authRedirectTo() },
    });
    if (error) return { ok: false, message: toAuthMessage(error) };
    return { ok: true };
  } catch (error) {
    return { ok: false, message: toAuthMessage(error as Error) };
  }
}

export async function sendMagicLink(email: string): Promise<AuthResult> {
  if (!isSupabaseConfigured()) return { ok: false, message: CONFIG_ERROR };

  try {
    const { error } = await getSupabase().auth.signInWithOtp({
      email,
      options: { emailRedirectTo: authRedirectTo() },
    });
    if (error) return { ok: false, message: toAuthMessage(error) };
    return { ok: true };
  } catch (error) {
    return { ok: false, message: toAuthMessage(error as Error) };
  }
}

export async function sendPasswordReset(email: string): Promise<AuthResult> {
  if (!isSupabaseConfigured()) return { ok: false, message: CONFIG_ERROR };

  try {
    const { error } = await getSupabase().auth.resetPasswordForEmail(email, {
      redirectTo: passwordResetRedirectTo(),
    });
    if (error) return { ok: false, message: toAuthMessage(error) };
    return { ok: true };
  } catch (error) {
    return { ok: false, message: toAuthMessage(error as Error) };
  }
}

export async function updatePassword(password: string): Promise<AuthResult> {
  if (!isSupabaseConfigured()) return { ok: false, message: CONFIG_ERROR };

  try {
    const { error } = await getSupabase().auth.updateUser({ password });
    if (error) return { ok: false, message: toAuthMessage(error) };
    return { ok: true };
  } catch (error) {
    return { ok: false, message: toAuthMessage(error as Error) };
  }
}

/** Exchanges a deep-link auth `code` (PKCE) for a session. */
export async function exchangeCodeFromUrl(url: string): Promise<AuthResult> {
  if (!isSupabaseConfigured()) return { ok: false, message: CONFIG_ERROR };

  const code = new URL(url).searchParams.get("code");
  if (!code) return { ok: false, message: "No auth code in link." };

  try {
    const { error } = await getSupabase().auth.exchangeCodeForSession(code);
    if (error) return { ok: false, message: toAuthMessage(error) };
    return { ok: true };
  } catch (error) {
    return { ok: false, message: toAuthMessage(error as Error) };
  }
}
