# 23 — Security

## Authentication & authorization

- Supabase Auth with email verification
- Middleware route protection
- RLS on all database tables
- Admin role checks for `(admin)` routes

## Input validation

- Zod schemas on all server actions and API routes
- Sanitize user-generated content (bio, messages)

## Rate limiting

- Login/register: 5 attempts per 15 min per IP
- Message send: 30/min per user
- Photo upload: 10/hour per user
- Report: 5/day per user

## Abuse prevention

- Bot detection on registration (honeypot + rate limit)
- Shadow ban capability for suspicious accounts
- Report + block system
- Photo moderation queue

## Payments

- Webhook signature verification
- Never expose Stripe secret key client-side

## Headers

- CSP, X-Frame-Options via Next.js config
- `poweredByHeader: false`

## Phase 2

- OpenAI moderation on messages/bios
- AWS Rekognition for image moderation
