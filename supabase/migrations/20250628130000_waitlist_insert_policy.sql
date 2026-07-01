-- Ensure anonymous waitlist signups can insert (marketing landing page).
-- Idempotent: safe to run if the policy already exists from initial_schema.

drop policy if exists waitlist_insert_anon on public.waitlist_entries;

create policy waitlist_insert_anon on public.waitlist_entries
  for insert to anon, authenticated
  with check (true);

grant insert on public.waitlist_entries to anon, authenticated;
