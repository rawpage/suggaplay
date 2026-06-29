import { createClient } from "@supabase/supabase-js";
import type { Database } from "@suggaplay/types";

/**
 * Server-side anon client for public RLS-gated writes (e.g. marketing waitlist).
 * Prefer this over the service-role client when RLS policies allow the operation.
 */
export function createAnonClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables.");
  }

  return createClient<Database>(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
