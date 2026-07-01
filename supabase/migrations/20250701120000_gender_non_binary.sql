-- Add non_binary to public.gender enum (waitlist + user profiles).
alter type public.gender add value if not exists 'non_binary';
