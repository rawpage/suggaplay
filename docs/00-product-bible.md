# SuggaPlay — Product Bible

> Source of truth for all product, UX, and engineering decisions.
> Reference docs: `docs/game-plan/*.pdf`

## Brand

**Name:** SuggaPlay (`suggaplay.com`)

**Tagline options:**
- "Where successful people meet without the games."
- "Unlimited connections. One membership."
- "Membership, not microtransactions."

**Personality:** Premium, stylish, discreet, confident, modern — Soho House, not "adult dating site."

## Core positioning (vs Secret Benefits)

| | Secret Benefits | SuggaPlay |
|---|---|---|
| Women | Free | Free forever |
| Men | Pay-per-action (credits) | One monthly membership |
| Psychology | Every click costs money | Pay once, use freely |
| Enemy | — | Friction, anxiety, hidden costs |

**No tokens. No credits. No pay-per-message.**

## Business model

- **Women:** Free forever (supply-first strategy)
- **Men:** Monthly subscription for unlimited access to all features
- **Founding membership:** £9.99/month (first 500 members, locked for life)
- **Standard membership:** £29.99/month

## Launch strategy

1. **One city only:** London (UK)
2. **Women first:** 90% of acquisition energy on women
3. **Men waitlist:** Collect emails while building female density
4. **Target ratio:** 300 women : 100 men at launch
5. **Invite-only early access** on landing page

## Revenue targets (MRR)

| Paying men | MRR |
|---|---|
| 100 | £2,999 |
| 500 | £15,000 |
| 1,000 | £30,000 |
| 5,000 | £150,000 |

## Product phases

### Phase 1 (MVP)
Profiles, messaging, search, notifications, **subscription** (not credits), verification.

### Phase 2
Voice notes, video introductions, AI icebreakers, private albums, events.

### Phase 3
Lifestyle community — brunches, networking, travel, experiences.

## Platform strategy

**Web app first** (mobile-first responsive + PWA), native apps only after 5,000+ active users / £20k+ MRR.

## Tech stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Hook Form, Zod
- **Backend:** Supabase (Auth, PostgreSQL, Storage, Realtime)
- **Deploy:** Vercel
- **Payments:** Stripe (subscriptions)
- **Email:** Resend
- **Images:** Cloudflare Images (or Supabase Storage initially)

## Build workflow (Cursor)

1. Read the relevant spec in `/docs/`
2. Inspect existing codebase
3. Explain implementation plan
4. Wait for approval
5. Build one feature at a time
6. Commit after each major feature

See `docs/25-build-order.md` for sequence.

## UX north star

Get users into the **member feed** as quickly as possible. Everything else is secondary.

**Hierarchy:** Landing → Signup wizard → Member feed → Profile → Messaging → Notifications → Retention loops
