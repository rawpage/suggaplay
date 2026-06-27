# 02 — Project Structure

```
app/
  (auth)/
    login/
    register/
    forgot-password/
    reset-password/
  (discover)/
    discover/
    search/
    nearby/
    favorites/
  (profile)/
    profile/[id]/
    edit-profile/
    photos/
    verification/
  (messages)/
    inbox/
    conversation/[id]/
  (account)/
    dashboard/
    notifications/
    subscription/
    settings/
  (admin)/
    moderation/
    reports/
    analytics/
  (marketing)/
    page.tsx          # Landing / waitlist

components/
  ui/                 # shadcn/ui
  layout/             # Navbar, BottomNav, Footer
  discover/           # ProfileCard, InfiniteGrid
  profile/            # PhotoCarousel, ProfileHeader
  messaging/          # ConversationList, MessageBubble
  account/            # NotificationDropdown, SubscriptionCard
  admin/

hooks/
lib/
  utils.ts
  constants.ts
  supabase/

types/
services/
actions/              # Server actions
supabase/
  migrations/
  seed.sql
```

## Conventions

- Feature-based folders under `components/`
- Shared types in `types/`
- API/business logic in `services/`
- Server actions in `actions/`
- Supabase client helpers in `lib/supabase/`
