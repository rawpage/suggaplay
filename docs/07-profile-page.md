# 07 — Profile Page

## Route

`/profile/[id]`

## Layout (desktop)

| Left | Center | Right (sticky) |
|---|---|---|
| Photo gallery | Bio, about, interests, lifestyle, looking for | Action panel |

## Sections

### Gallery
- Public photos (carousel)
- Private album teaser (blurred previews)
- Unlock / request access button (subscription-gated for men)

### About
- Headline, bio, occupation, interests, lifestyle, relationship goals, looking for

### Sticky action panel
- Message
- Favorite
- Request private photos
- Report profile

## Mobile

- Full-width gallery on top
- Sticky bottom action bar (Message, Favorite)

## Side effects

- Record profile visit in `visitors` table
- Show visitor count to profile owner (gamification)
