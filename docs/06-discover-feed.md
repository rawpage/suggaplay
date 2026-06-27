# 06 — Discover Feed

The core product experience. Instagram/Tinder-style member feed.

## Route

`/discover`

## Profile card contents

- Large dominant photo
- Username, age, city
- Online indicator (green dot)
- Verification badge
- Quick actions (no need to open full profile):
  - ❤ Favorite
  - 💬 Message
  - 👁 View profile

## Features

- Infinite scroll (Supabase cursor pagination)
- Skeleton loading cards
- Empty state when no profiles match
- Mobile-first single-column; tablet/desktop grid
- Filter bar: online now, verified only (quick toggles)

## Data

Query profiles where `onboarding_complete = true`, filtered by launch city (London), excluding blocked/reported users.

## Components

- `ProfileCard`, `InfiniteGrid`, `SkeletonCard`, `EmptyState`, `OnlineDot`, `FavoriteButton`, `VerificationBadge`
