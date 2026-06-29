-- Remove London default; city is supplied on membership request signup.
alter table public.waitlist_entries alter column city drop default;
