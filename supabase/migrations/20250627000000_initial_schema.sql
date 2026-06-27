-- SuggaPlay initial schema
-- Monetization: monthly subscription only (NO credits, NO tokens)

-- ---------------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------------
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
create type public.user_role as enum ('member', 'admin');
create type public.gender as enum ('man', 'woman');
create type public.online_status as enum ('online', 'offline', 'away');
create type public.subscription_status as enum (
  'none',
  'founding',
  'active',
  'cancelled',
  'past_due'
);
create type public.subscription_plan as enum ('founding', 'standard');
create type public.stripe_subscription_state as enum (
  'trialing',
  'active',
  'past_due',
  'canceled',
  'unpaid',
  'incomplete',
  'incomplete_expired',
  'paused'
);
create type public.verification_status as enum ('pending', 'approved', 'rejected');
create type public.report_reason as enum (
  'spam',
  'fake_account',
  'harassment',
  'inappropriate_content',
  'other'
);
create type public.report_status as enum ('open', 'reviewing', 'resolved', 'dismissed');
create type public.notification_type as enum (
  'new_message',
  'favorite',
  'profile_visitor',
  'album_request',
  'album_granted',
  'verification_approved',
  'subscription_renewal',
  'subscription_expiring',
  'subscription_payment_failed'
);

-- ---------------------------------------------------------------------------
-- Users (extends auth.users — account & subscription state)
-- ---------------------------------------------------------------------------
create table public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  role public.user_role not null default 'member',
  gender public.gender,
  subscription_status public.subscription_status not null default 'none',
  stripe_customer_id text unique,
  is_verified boolean not null default false,
  is_shadow_banned boolean not null default false,
  last_online timestamptz,
  online_status public.online_status not null default 'offline',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index users_subscription_status_idx on public.users (subscription_status);
create index users_gender_idx on public.users (gender);
create index users_stripe_customer_id_idx on public.users (stripe_customer_id)
  where stripe_customer_id is not null;

-- ---------------------------------------------------------------------------
-- Profiles (dating profile — discoverable content)
-- ---------------------------------------------------------------------------
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.users (id) on delete cascade,
  username text not null,
  age smallint check (age >= 18),
  city text not null default 'London',
  country text not null default 'United Kingdom',
  headline text,
  bio text,
  occupation text,
  height_cm smallint,
  body_type text,
  smoker text,
  drinker text,
  relationship_type text,
  looking_for text,
  latitude double precision,
  longitude double precision,
  onboarding_step smallint not null default 0,
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_username_length check (char_length(username) >= 2),
  constraint profiles_username_format check (username ~ '^[a-zA-Z0-9_]+$')
);

create unique index profiles_username_lower_idx on public.profiles (lower(username));
create index profiles_discover_idx on public.profiles (city, onboarding_complete)
  where onboarding_complete = true;
create index profiles_location_idx on public.profiles (latitude, longitude)
  where latitude is not null and longitude is not null;

-- ---------------------------------------------------------------------------
-- Photos
-- ---------------------------------------------------------------------------
create table public.photos (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  storage_path text not null,
  url text not null,
  is_private boolean not null default false,
  sort_order smallint not null default 0,
  approved boolean not null default true,
  created_at timestamptz not null default now()
);

create index photos_profile_id_idx on public.photos (profile_id, sort_order);

-- ---------------------------------------------------------------------------
-- Private albums
-- ---------------------------------------------------------------------------
create table public.private_albums (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  title text not null default 'Private',
  created_at timestamptz not null default now()
);

create index private_albums_profile_id_idx on public.private_albums (profile_id);

create table public.album_access (
  id uuid primary key default gen_random_uuid(),
  album_id uuid not null references public.private_albums (id) on delete cascade,
  granted_to_user_id uuid not null references public.users (id) on delete cascade,
  granted_by_user_id uuid not null references public.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (album_id, granted_to_user_id)
);

create index album_access_granted_to_idx on public.album_access (granted_to_user_id);

-- ---------------------------------------------------------------------------
-- Messaging
-- ---------------------------------------------------------------------------
create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  participant_a uuid not null references public.users (id) on delete cascade,
  participant_b uuid not null references public.users (id) on delete cascade,
  last_message_at timestamptz,
  created_at timestamptz not null default now(),
  constraint conversations_distinct_participants check (participant_a <> participant_b),
  constraint conversations_ordered_participants check (participant_a < participant_b),
  unique (participant_a, participant_b)
);

create index conversations_participant_a_idx on public.conversations (participant_a, last_message_at desc);
create index conversations_participant_b_idx on public.conversations (participant_b, last_message_at desc);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations (id) on delete cascade,
  sender_id uuid not null references public.users (id) on delete cascade,
  content text,
  image_url text,
  read_at timestamptz,
  created_at timestamptz not null default now(),
  constraint messages_content_or_image check (
    content is not null or image_url is not null
  )
);

create index messages_conversation_id_idx on public.messages (conversation_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Social graph
-- ---------------------------------------------------------------------------
create table public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  favorite_user_id uuid not null references public.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, favorite_user_id),
  constraint favorites_not_self check (user_id <> favorite_user_id)
);

create index favorites_user_id_idx on public.favorites (user_id, created_at desc);

create table public.visitors (
  id uuid primary key default gen_random_uuid(),
  visitor_id uuid not null references public.users (id) on delete cascade,
  visited_user_id uuid not null references public.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint visitors_not_self check (visitor_id <> visited_user_id)
);

create index visitors_visited_user_id_idx on public.visitors (visited_user_id, created_at desc);
create index visitors_visitor_id_idx on public.visitors (visitor_id, created_at desc);

create table public.user_blocks (
  id uuid primary key default gen_random_uuid(),
  blocker_id uuid not null references public.users (id) on delete cascade,
  blocked_id uuid not null references public.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (blocker_id, blocked_id),
  constraint user_blocks_not_self check (blocker_id <> blocked_id)
);

-- ---------------------------------------------------------------------------
-- Notifications
-- ---------------------------------------------------------------------------
create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  type public.notification_type not null,
  content text not null,
  read boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index notifications_user_id_idx on public.notifications (user_id, read, created_at desc);

-- ---------------------------------------------------------------------------
-- Subscriptions & payments (monthly membership — NO credit/token tables)
-- ---------------------------------------------------------------------------
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  stripe_subscription_id text not null unique,
  stripe_price_id text not null,
  plan public.subscription_plan not null,
  status public.stripe_subscription_state not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index subscriptions_user_id_idx on public.subscriptions (user_id);
create index subscriptions_status_idx on public.subscriptions (status);
create index subscriptions_plan_idx on public.subscriptions (plan)
  where plan = 'founding';

create table public.transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  subscription_id uuid references public.subscriptions (id) on delete set null,
  stripe_invoice_id text unique,
  stripe_payment_intent_id text,
  amount_pence integer not null,
  currency text not null default 'gbp',
  status text not null,
  created_at timestamptz not null default now()
);

create index transactions_user_id_idx on public.transactions (user_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Verification & moderation
-- ---------------------------------------------------------------------------
create table public.verification_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  selfie_url text not null,
  id_url text not null,
  status public.verification_status not null default 'pending',
  reviewed_by uuid references public.users (id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create index verification_requests_status_idx on public.verification_requests (status, created_at);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.users (id) on delete cascade,
  reported_user_id uuid not null references public.users (id) on delete cascade,
  reason public.report_reason not null,
  details text,
  status public.report_status not null default 'open',
  created_at timestamptz not null default now(),
  constraint reports_not_self check (reporter_id <> reported_user_id)
);

create index reports_status_idx on public.reports (status, created_at desc);

-- ---------------------------------------------------------------------------
-- Marketing waitlist (pre-launch)
-- ---------------------------------------------------------------------------
create table public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  gender public.gender,
  city text default 'London',
  created_at timestamptz not null default now()
);

create unique index waitlist_entries_email_lower_idx on public.waitlist_entries (lower(email));

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.onboarding_complete_profile(p_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.user_id = p_user_id and p.onboarding_complete = true
  );
$$;

create trigger users_set_updated_at
  before update on public.users
  for each row execute function public.set_updated_at();

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger subscriptions_set_updated_at
  before update on public.subscriptions
  for each row execute function public.set_updated_at();

-- Sync subscription_status on users from active subscription rows
create or replace function public.sync_user_subscription_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  next_status public.subscription_status;
begin
  if new.status in ('active', 'trialing') then
    if new.plan = 'founding' then
      next_status := 'founding';
    else
      next_status := 'active';
    end if;
  elsif new.status = 'past_due' then
    next_status := 'past_due';
  elsif new.status = 'canceled' then
    next_status := 'cancelled';
  else
    next_status := 'none';
  end if;

  update public.users
  set subscription_status = next_status
  where id = new.user_id;

  return new;
end;
$$;

create trigger subscriptions_sync_user_status
  after insert or update on public.subscriptions
  for each row execute function public.sync_user_subscription_status();

-- Men need active subscription; women always have access
create or replace function public.has_premium_access(p_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.users u
    where u.id = p_user_id
      and u.is_shadow_banned = false
      and (
        u.gender = 'woman'
        or u.subscription_status in ('founding', 'active')
      )
  );
$$;

-- Founding member cap (500)
create or replace function public.founding_slots_remaining()
returns integer
language sql
stable
security definer
set search_path = public
as $$
  select greatest(
    0,
    500 - (
      select count(*)::integer
      from public.subscriptions
      where plan = 'founding'
        and status in ('active', 'trialing')
    )
  );
$$;

-- Auto-create users + profiles row on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);

  insert into public.profiles (user_id, username, city)
  values (
    new.id,
    'user_' || substr(replace(new.id::text, '-', ''), 1, 8),
    'London'
  );

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.photos enable row level security;
alter table public.private_albums enable row level security;
alter table public.album_access enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.favorites enable row level security;
alter table public.visitors enable row level security;
alter table public.user_blocks enable row level security;
alter table public.notifications enable row level security;
alter table public.subscriptions enable row level security;
alter table public.transactions enable row level security;
alter table public.verification_requests enable row level security;
alter table public.reports enable row level security;
alter table public.waitlist_entries enable row level security;

-- Users: read own row; discoverable users readable when onboarding complete
create policy users_select_own on public.users
  for select to authenticated
  using (id = auth.uid() or (
    onboarding_complete_profile(id) and is_shadow_banned = false
  ));

create policy users_update_own on public.users
  for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

-- Profiles: public discoverable profiles; own profile full access
create policy profiles_select_discoverable on public.profiles
  for select to authenticated
  using (
    onboarding_complete = true
    or user_id = auth.uid()
  );

create policy profiles_update_own on public.profiles
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy profiles_insert_own on public.profiles
  for insert to authenticated
  with check (user_id = auth.uid());

-- Photos: public photos on discoverable profiles; own photos manageable
create policy photos_select on public.photos
  for select to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = photos.profile_id
        and (
          (p.onboarding_complete and photos.is_private = false and photos.approved)
          or p.user_id = auth.uid()
          or exists (
            select 1 from public.album_access aa
            join public.private_albums pa on pa.id = aa.album_id
            where pa.profile_id = p.id
              and aa.granted_to_user_id = auth.uid()
          )
        )
    )
  );

create policy photos_manage_own on public.photos
  for all to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = photos.profile_id and p.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = photos.profile_id and p.user_id = auth.uid()
    )
  );

-- Conversations & messages: participants only
create policy conversations_participants on public.conversations
  for all to authenticated
  using (participant_a = auth.uid() or participant_b = auth.uid())
  with check (participant_a = auth.uid() or participant_b = auth.uid());

create policy messages_participants on public.messages
  for all to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (c.participant_a = auth.uid() or c.participant_b = auth.uid())
    )
  )
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (c.participant_a = auth.uid() or c.participant_b = auth.uid())
    )
  );

-- Favorites
create policy favorites_own on public.favorites
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Visitors: insert as self; view own visitor stats if premium
create policy visitors_insert on public.visitors
  for insert to authenticated
  with check (visitor_id = auth.uid());

create policy visitors_select on public.visitors
  for select to authenticated
  using (
    visited_user_id = auth.uid()
    or visitor_id = auth.uid()
  );

-- Notifications: own only
create policy notifications_own on public.notifications
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Subscriptions & transactions: own only (writes via service role / webhooks)
create policy subscriptions_select_own on public.subscriptions
  for select to authenticated
  using (user_id = auth.uid());

create policy transactions_select_own on public.transactions
  for select to authenticated
  using (user_id = auth.uid());

-- Verification & reports
create policy verification_own on public.verification_requests
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy reports_insert on public.reports
  for insert to authenticated
  with check (reporter_id = auth.uid());

create policy reports_select_own on public.reports
  for select to authenticated
  using (reporter_id = auth.uid());

-- Waitlist: anonymous insert via service role or public insert for landing
create policy waitlist_insert_anon on public.waitlist_entries
  for insert to anon, authenticated
  with check (true);

-- Blocks
create policy blocks_own on public.user_blocks
  for all to authenticated
  using (blocker_id = auth.uid())
  with check (blocker_id = auth.uid());

-- Admin bypass via service role only (no client policies for admin tables yet)

-- ---------------------------------------------------------------------------
-- Realtime (enable in Supabase dashboard or via publication)
-- ---------------------------------------------------------------------------
alter publication supabase_realtime add table public.messages;
alter publication supabase_realtime add table public.notifications;
