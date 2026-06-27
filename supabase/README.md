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

Add your **database password** to `.env.local`:

```env
SUPABASE_DB_PASSWORD=your-database-password
```

Find it: **Project Settings → Database → Database password** (not the API keys).

Then run:

```bash
npm run db:migrate
```

### Option B — SQL Editor (manual)

1. Open [SQL Editor](https://supabase.com/dashboard/project/sectgzwfazmewxppoogm/sql/new)
2. Paste contents of `supabase/migrations/20250627000000_initial_schema.sql`
3. Click **Run**

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
