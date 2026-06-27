# 15 — Favorites

## Features

- Favorite / unfavorite from discover card or profile page
- `/favorites` page — grid of favorited profiles
- Count badge: "X members saved you" on dashboard
- Notification when someone favorites you

## Data

`favorites` table — see `docs/03-database.md`

## Components

- `FavoriteButton` (heart toggle with animation)
- `FavoritesGrid`
- `FavoriteCountBadge`

## Rules

- Cannot favorite yourself
- Idempotent toggle (favorite → unfavorite → favorite)
