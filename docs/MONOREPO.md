# SuggaPlay Monorepo Architecture

## Overview

```
suggaplay/
├── apps/
│   ├── website/          # Next.js 15 — brand site (Vercel)
│   └── mobile/           # Expo + React Native — dating product
├── packages/
│   ├── types/            # Shared TypeScript types (Supabase schema)
│   ├── supabase/         # Shared Supabase clients
│   └── tokens/           # Shared design tokens (colour, spacing, type)
├── supabase/             # Migrations, seed, shared PostgreSQL schema
├── docs/                 # Product, design, and marketing documentation
└── scripts/              # Repo-level scripts (migrations, etc.)
```

## Applications

### `apps/website`

**Purpose:** Public brand face — membership philosophy, journal, applications, legal, app download.

**Stack:** Next.js 15, Tailwind v4, shadcn/ui, Framer Motion.

**Deploy:** Vercel (`rootDirectory: apps/website`).

**Does not include:** Messaging, discover feed, profiles, or in-browser dating.

### `apps/mobile`

**Purpose:** The SuggaPlay product — discover, profiles, messaging, subscriptions.

**Stack:** Expo SDK 52, Expo Router, NativeWind, React Query, Supabase, React Hook Form + Zod.

**Deploy:** EAS Build → App Store / Play Store.

**Routes:** Splash → Onboarding → Apply → Membership Review → `(tabs)` (Home, Discover, Messages, Notifications, Events, Profile, Settings).

## Shared packages

### `@suggaplay/types`

Generated and hand-written TypeScript types from the Supabase schema. Single source of truth for `Database`, enums, and shared API shapes.

### `@suggaplay/supabase`

Supabase client factories used by both apps:

| Export | Consumer | Purpose |
|--------|----------|---------|
| `@suggaplay/supabase/admin` | Website server actions, mobile backend jobs | Service-role client |
| `@suggaplay/supabase/browser` | Website client components | Browser auth session |
| `@suggaplay/supabase/server` | Website Server Components / actions | Cookie-based auth session |
| `@suggaplay/supabase/mobile` | Mobile app | Native auth session (Expo SecureStore) |

### `@suggaplay/tokens`

Design tokens as TypeScript constants — colours, spacing, typography scale. Website maps these to CSS variables; mobile maps to StyleSheet / NativeWind.

## Shared backend

One Supabase project serves both apps:

- **PostgreSQL** — schema in `supabase/migrations/`
- **Auth** — same user pool; website uses auth for admin only; mobile uses auth for members
- **Storage** — profile photos, journal assets (website)
- **RLS** — policies scoped per table and role

## Dependency flow

```
apps/website  ──► @suggaplay/types
              ──► @suggaplay/supabase
              ──► @suggaplay/tokens

apps/mobile   ──► @suggaplay/types
              ──► @suggaplay/supabase
              ──► @suggaplay/tokens

packages/supabase ──► @suggaplay/types
```

Apps never import from each other. Shared code lives in `packages/` only.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev:website` | Start Next.js dev server |
| `npm run dev:mobile` | Start Expo dev server |
| `npm run build:website` | Production build (website) |
| `npm run typecheck` | Typecheck all workspaces |
| `npm run db:migrate` | Apply Supabase migrations |

## Environment variables

- **Root `.env.example`** — shared Supabase credentials
- **`apps/website/.env.example`** — site URL, website-specific keys
- **`apps/mobile/.env.example`** — Expo public Supabase keys

Never commit `.env.local` files.
