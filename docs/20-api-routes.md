# 20 — API Routes

Next.js Route Handlers + Server Actions. Prefer server actions for mutations; API routes for webhooks and external integrations.

## Routes

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/webhooks/stripe` | Stripe subscription events |
| GET | `/api/profile/[id]` | Public profile data |
| POST | `/api/photos/upload` | Signed upload URL |
| GET | `/api/search` | Filtered profile search |
| POST | `/api/report` | Submit report |
| GET | `/api/health` | Health check |

## Server actions (preferred)

Located in `actions/`:
- `auth.actions.ts`
- `profile.actions.ts`
- `photo.actions.ts`
- `message.actions.ts`
- `favorite.actions.ts`
- `notification.actions.ts`
- `subscription.actions.ts`

## Conventions

- Zod validate all inputs
- Return typed `{ success, data?, error? }` responses
- Rate limit sensitive endpoints
- Auth check on every mutation
