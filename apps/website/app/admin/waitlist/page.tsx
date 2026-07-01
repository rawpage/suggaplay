import { createAdminClient } from "@suggaplay/supabase/admin";
import { adminLogoutAction } from "@/actions/admin.actions";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

function formatGender(gender: string | null) {
  if (!gender) return "—";
  if (gender === "non_binary") return "Non-Binary";
  if (gender === "man") return "Man";
  if (gender === "woman") return "Woman";
  return gender;
}

export default async function AdminWaitlistPage() {
  let entries: {
    id: string;
    name: string | null;
    email: string;
    gender: string | null;
    city: string | null;
    created_at: string;
  }[] = [];
  let loadError: string | null = null;

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("waitlist_entries")
      .select("id, name, email, gender, city, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      loadError = error.message;
    } else {
      entries = data ?? [];
    }
  } catch {
    loadError =
      "Unable to load waitlist. Check SUPABASE_SERVICE_ROLE_KEY is set in your environment.";
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-editorial text-4xl">Waitlist</h1>
          <p className="mt-2 text-sm text-neutral-600">
            {entries.length} submission{entries.length === 1 ? "" : "s"}
          </p>
        </div>

        <form action={adminLogoutAction}>
          <button
            type="submit"
            className="border border-neutral-300 px-4 py-2 text-sm hover:border-black"
          >
            Sign out
          </button>
        </form>
      </div>

      {loadError ? (
        <p className="mt-8 text-sm text-red-600">{loadError}</p>
      ) : entries.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-600">No submissions yet.</p>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 font-medium">Name</th>
                <th className="py-3 pr-4 font-medium">Email</th>
                <th className="py-3 pr-4 font-medium">Gender</th>
                <th className="py-3 pr-4 font-medium">City</th>
                <th className="py-3 font-medium">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b border-neutral-100">
                  <td className="py-3 pr-4">{entry.name ?? "—"}</td>
                  <td className="py-3 pr-4">{entry.email}</td>
                  <td className="py-3 pr-4">{formatGender(entry.gender)}</td>
                  <td className="py-3 pr-4">{entry.city ?? "—"}</td>
                  <td className="py-3 whitespace-nowrap text-neutral-600">
                    {formatDate(entry.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
