# 24 — Deployment

## Hosting

- **Vercel** — connected to GitHub (`rawpage/suggaplay`)
- Preview deployments on every PR
- Production on `main` branch

## Environment variables

```env
# Site
NEXT_PUBLIC_SITE_URL=https://suggaplay.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_FOUNDING_PRICE_ID=
STRIPE_STANDARD_PRICE_ID=

# Email
RESEND_API_KEY=

# Optional
OPENAI_API_KEY=
```

## Domains

- Production: `suggaplay.com`
- Staging: Vercel preview URLs

## Service setup order

| Phase | Service | When |
|---|---|---|
| 1 | GitHub + Vercel + Supabase | Day 1 |
| 2 | Resend | After auth works |
| 3 | Cloudflare Images | After photo upload |
| 4 | Stripe | Before subscription launch |
| 5 | OneSignal | After messaging (Phase 2) |
| 6 | PostHog + Sentry | Before public launch |

## Checklist before launch

- [ ] All env vars set in Vercel production
- [ ] Stripe webhook endpoint configured
- [ ] Supabase RLS policies tested
- [ ] Email verification working
- [ ] Custom domain connected
- [ ] SEO metadata on marketing pages
