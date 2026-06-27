# 01 — Project Overview

## Product

Build **SuggaPlay** — a production-ready subscription dating platform inspired by Secret Benefits UX, with a **membership-not-microtransactions** model.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- React Hook Form + Zod
- Supabase (Auth, PostgreSQL, Storage, Realtime)
- Vercel
- Stripe (subscriptions)
- Resend (email)
- Cloudflare Images (or Supabase Storage for MVP)

## Requirements

- Mobile-first responsive design
- Server components wherever possible
- Server actions for mutations
- SEO-friendly metadata
- Dark mode
- Type-safe interfaces throughout
- Loading states, skeleton loaders, error boundaries
- Reusable component library
- Rate limiting and input validation

## Rules

- Build **one feature at a time**
- **Never skip steps** in the build order
- Always **inspect existing files** before changing code
- Read the relevant spec doc before each feature
- Explain plan → get approval → implement → commit
