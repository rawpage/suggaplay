# Supabase setup

## 1. Create project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Create project: **suggaplay-prod** (or `suggaplay-dev` for local)
3. Copy **Project URL**, **anon key**, and **service role key**

## 2. Configure environment

```bash
cp .env.example .env.local
```

Add to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

Add the same vars in Vercel → Project Settings → Environment Variables.

## 3. Apply migration

### Option A — CLI script (recommended)

Add your **database password** to `.env.local` (do not commit this file):

```env
# Option A — used by npm run db:migrate
SUPABASE_DB_PASSWORD=your-database-password

# Option B — full connection string (alternative for some tools)
# DATABASE_URL=postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
```

Find the password: **Project Settings → Database → Database password** (not the API keys).

For `DATABASE_URL`, use **Project Settings → Database → Connection string → URI** (Session pooler or Transaction pooler).

Then run:

```bash
npm run db:migrate
```

This applies every SQL file in `supabase/migrations/` in order. To apply a single file:

```bash
node scripts/apply-migration.mjs 20250628130000_waitlist_insert_policy
```

### Option B — SQL Editor (manual)

1. Open [SQL Editor](https://supabase.com/dashboard/project/sectgzwfazmewxppoogm/sql/new)
2. Paste contents of pending files in `supabase/migrations/` (newest if you only need a delta)
3. Click **Run**

**Waitlist signup** requires either `SUPABASE_SERVICE_ROLE_KEY` on the website (server action) or the `waitlist_insert_anon` RLS policy from `20250628130000_waitlist_insert_policy.sql`.

## 4. Verify

After migration, confirm tables exist:

- `users`, `profiles`, `photos`, `conversations`, `messages`
- `subscriptions`, `transactions` (**monthly billing only — no credit/token tables**)
- `waitlist_entries`, `favorites`, `visitors`, `notifications`

## 5. Auth settings

In Supabase → Authentication → Settings:

- Enable email provider
- Set site URL to `http://localhost:3000` (dev) and production URL
- Add redirect URLs for auth callbacks

## Monetization note

This schema supports **Stripe subscriptions only**. Do not add credits, tokens, or wallet tables.
