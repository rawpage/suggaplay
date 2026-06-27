# 21 — Component Library

Reusable components across the platform.

## Layout
- `Navbar` — logo, search, notifications, profile menu
- `BottomNav` — mobile sticky nav (Discover, Search, Messages, Favorites, Profile)
- `Footer` — marketing pages only

## Discover & Search
- `ProfileCard` — feed/search result card
- `InfiniteGrid` — infinite scroll wrapper
- `FilterSidebar` / `FilterSheet`
- `SkeletonCard`, `EmptyState`

## Profile
- `PhotoCarousel`, `PhotoGrid`, `ProfileHeader`
- `VerificationBadge`, `OnlineDot`
- `FavoriteButton`, `UnlockModal`

## Messaging
- `ConversationList`, `MessageBubble`, `TypingIndicator`, `ChatInput`, `UnreadCounter`

## Account
- `NotificationDropdown`, `SubscriptionCard`, `MembershipBadge`
- `UpgradeModal` — subscription gate for men

## Shared
- `ReportModal`, `ConfirmDialog`
- `FadeIn` — Framer Motion wrapper

All built on shadcn/ui primitives with Tailwind + 8px spacing grid.
