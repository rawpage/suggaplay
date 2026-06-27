import type { ApiResponse, WaitlistEntry } from "@/types";

const WAITLIST_API_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL;

export async function submitWaitlistEntry(
  entry: WaitlistEntry,
): Promise<ApiResponse<WaitlistEntry>> {
  if (WAITLIST_API_URL) {
    const response = await fetch(WAITLIST_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      return {
        success: false,
        error: "Unable to join the waitlist. Please try again.",
      };
    }

    const data = (await response.json()) as WaitlistEntry;
    return { success: true, data };
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  return { success: true, data: entry };
}
