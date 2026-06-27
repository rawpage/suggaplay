# 03 — Database Schema

PostgreSQL via Supabase. All tables use UUID primary keys unless noted.

## Core tables

### users
Extended Supabase auth.users via profiles pattern.
- `id` (uuid, FK → auth.users)
- `email`
- `role` (member | admin)
- `gender` (man | woman)
- `subscription_status` (none | founding | active | cancelled)
- `stripe_customer_id`
- `is_verified` (boolean)
- `last_online` (timestamptz)
- `online_status` (online | offline | away)
- `created_at`

### profiles
- `id`, `user_id` (FK)
- `username`, `age`, `city`, `country`, `headline`, `bio`
- `occupation`, `height`, `body_type`, `smoker`, `drinker`
- `relationship_type`, `looking_for`
- `latitude`, `longitude` (for distance search)
- `onboarding_complete` (boolean)

### photos
- `id`, `profile_id` (FK)
- `url`, `is_private`, `sort_order`, `approved`, `created_at`

### private_albums
- `id`, `profile_id` (FK)
- `title`, `created_at`

### album_access
- `id`, `album_id`, `granted_to_user_id`, `granted_by_user_id`, `created_at`

### conversations
- `id`, `participant_a`, `participant_b`, `last_message_at`, `created_at`

### messages
- `id`, `conversation_id` (FK)
- `sender_id`, `content`, `image_url`
- `read_at`, `created_at`

### favorites
- `id`, `user_id`, `favorite_user_id`, `created_at`
- Unique constraint on (user_id, favorite_user_id)

### visitors
- `id`, `visitor_id`, `visited_user_id`, `created_at`

### notifications
- `id`, `user_id`, `type`, `content`, `read`, `metadata` (jsonb), `created_at`

### reports
- `id`, `reporter_id`, `reported_user_id`, `reason`, `details`, `status`, `created_at`

### subscriptions
- `id`, `user_id`, `stripe_subscription_id`, `plan` (founding | standard)
- `status`, `current_period_end`, `created_at`

### transactions
- `id`, `user_id`, `subscription_id`, `stripe_invoice_id`, `amount_pence`, `currency`, `status`, `created_at`

> **No credits, tokens, or wallet tables.** Monetization is subscription-only via `subscriptions` + Stripe.

### verification_requests
- `id`, `user_id`, `selfie_url`, `id_url`, `status` (pending | approved | rejected)
- `reviewed_by`, `reviewed_at`, `created_at`

## Indexes

- `profiles(city, gender, onboarding_complete)`
- `profiles` GIST on location for distance queries
- `messages(conversation_id, created_at DESC)`
- `visitors(visited_user_id, created_at DESC)`
- `notifications(user_id, read, created_at DESC)`
- `favorites(user_id)`

## RLS

Enable Row Level Security on all tables. Users can only read/write their own data unless explicitly public (e.g. discoverable profiles).
