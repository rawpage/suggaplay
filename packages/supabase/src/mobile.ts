import { createClient } from "@supabase/supabase-js";
import type { Database } from "@suggaplay/types";

/**
 * Mobile client for Expo / React Native.
 * Auth persistence via SecureStore will be wired when auth is implemented.
 */
export function createMobileClient() {
  const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase mobile environment variables.");
  }

  return createClient<Database>(url, key, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });
}
