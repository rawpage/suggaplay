# 12 — Subscription System

> **Important:** SuggaPlay uses **monthly subscriptions**, NOT credits. This is a core differentiator from Secret Benefits.

## Plans

| Plan | Price | Eligibility |
|---|---|---|
| Founding membership | £9.99/month | First 500 men, locked for life |
| Standard membership | £29.99/month | All men after founding cap |
| Women | Free forever | All women |

## Unlimited access includes

- Messages (no per-message cost)
- Likes / favorites
- See profile visitors
- See who favorited you
- Private album access (when granted)
- Search filters
- Full profile views

## Subscription states

- `none` — registered but not subscribed (men)
- `founding` — active founding member
- `active` — active standard member
- `cancelled` — cancelled, access until period end
- `past_due` — payment failed, grace period

## UI components

- `SubscriptionCard` — current plan, renewal date
- `UpgradeModal` — shown when unsubscribed man tries gated action
- `PricingPage` — founding vs standard comparison
- `MembershipBadge` — founding member badge

## Gating logic

Middleware + server-side checks: men must have `subscription_status` in (`founding`, `active`) to message, see visitors, etc.
