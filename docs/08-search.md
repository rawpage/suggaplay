# 08 — Search & Filters

## Route

`/search`

## Filters (sidebar on desktop, sheet on mobile)

- Age range
- Distance (km from user location)
- Height
- Body type
- Drinking / Smoking
- Relationship goals
- Online now
- Verified only

## Behaviour

- Instant results — no page refresh
- URL query params for shareable/bookmarkable searches
- Result count displayed
- Same `ProfileCard` component as discover feed
- Infinite scroll on results

## Components

- `FilterSidebar`, `FilterSheet`, `SearchResults`, `ProfileCard`

## Performance

- Debounce filter changes (300ms)
- Server-side filtering via Supabase queries with indexes
