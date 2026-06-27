# 25 — Build Order

Follow this sequence exactly. One feature per session. Commit after each step.

| Step | Spec doc | Feature |
|---|---|---|
| 1 | `01-overview` | ✅ Project setup (Next.js, Tailwind, shadcn, structure) |
| 2 | `03-database` | Supabase schema + migrations |
| 3 | `04-authentication` | Auth pages + middleware |
| 4 | `05-onboarding` | Multi-step onboarding wizard |
| 5 | `06-discover-feed` | Tinder-style member feed |
| 6 | `07-profile-page` | Profile view page |
| 7 | `08-search` | Search + filters |
| 8 | `09-messaging` | Realtime chat |
| 9 | `10-notifications` | Notification center |
| 10 | `11-photo-system` | Photo upload + private albums |
| 11 | `15-favorites` | Favorites system |
| 12 | `14-visitors` | Profile visitors |
| 13 | `16-verification` | ID verification flow |
| 14 | `12-subscription-system` | Subscription gating |
| 15 | `13-payments` | Stripe integration |
| 16 | `18-reports` | Reports + blocking |
| 17 | `17-admin-dashboard` | Admin panel |
| 18 | `24-deployment` | Production hardening + launch |

## Cursor prompt pattern (every feature)

```
Read docs/XX-feature-name.md and docs/00-product-bible.md.
Inspect the existing codebase first.
Explain your implementation plan.
Wait for approval.
Then create complete files using TypeScript, server actions, and shadcn/ui.
Do not break existing functionality.
```

## Current status

- **Step 1:** Done (project scaffold + landing page — editorial realignment pending)
- **Step 2:** Done (Supabase schema in `supabase/migrations/` — apply to your project)
- **Step 3:** Next — Authentication

## External services needed now

1. Create Supabase project (`suggaplay-prod`)
2. Add env vars to `.env.local` and Vercel
