# 14 — Profile Visitors

## Features

- Track every profile view in `visitors` table
- "X people viewed your profile" on dashboard
- Recently viewed list (who you viewed)
- Daily view count analytics for profile owner

## Gamification

- Visitor count creates curiosity loop
- Show aggregate count, not always individual names (unless subscribed)
- "Top admirer" badge (Phase 2)

## Routes

- `/account/dashboard` — visitor stats widget
- `/account/visitors` — full visitor list (subscription-gated for men)

## Privacy

- Don't expose viewer identity to non-subscribers
- Deduplicate views within 24h window
