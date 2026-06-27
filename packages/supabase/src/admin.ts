import { createClient } from "@supabase/supabase-js";
import type { Database } from "@suggaplay/types";

/**
 * Service-role client for webhooks, admin tasks, and server-only writes.
 * Never import in Client Components or mobile client code.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase admin environment variables.");
  }

  return createClient<Database>(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
