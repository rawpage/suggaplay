# SuggaPlay Monorepo

Two applications, one brand, one backend.

| App | Path | Stack | Deploy |
|-----|------|-------|--------|
| **Website** | `apps/website` | Next.js 15 | Vercel |
| **Mobile** | `apps/mobile` | Expo + React Native | App Store / Play Store |

Shared packages live in `packages/`. Database migrations live in `supabase/`.

See [docs/MONOREPO.md](docs/MONOREPO.md) for full architecture.

## Getting started

```bash
npm install
cp .env.example .env.local          # shared Supabase credentials
cp apps/website/.env.example apps/website/.env.local
npm run dev:website                 # http://localhost:3000
npm run dev:mobile                  # Expo dev server
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev:website` | Start brand website (Next.js) |
| `npm run dev:mobile` | Start mobile app (Expo) |
| `npm run build:website` | Production build for Vercel |
| `npm run typecheck` | Typecheck all workspaces |
| `npm run db:migrate` | Apply Supabase migrations |

## Vercel

Set **Root Directory** to `apps/website` in the Vercel project settings, or use the root `vercel.json` which targets the website workspace.

## Structure

```
apps/
  website/     Brand site — marketing, journal, applications, legal
  mobile/      Product app — discover, profiles, messaging
packages/
  types/       Shared TypeScript types (Supabase schema)
  supabase/    Shared Supabase client factories
  tokens/      Shared design tokens
supabase/      PostgreSQL migrations
docs/          Product, design, and marketing documentation
```
