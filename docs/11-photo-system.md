# 11 — Photo System

## Public photos

- Upload via drag-and-drop
- Client-side compression before upload
- Reorder via drag
- Delete with confirmation
- Admin approval queue (optional for MVP — auto-approve with moderation flag)

## Private albums

- Create named albums
- Blurred preview for non-granted viewers
- Grant/revoke access per user
- Men with active subscription can request access

## Storage

- MVP: Supabase Storage
- Production: Cloudflare Images for CDN + compression

## Components

- `PhotoUploader`, `PhotoCarousel`, `PhotoGrid`, `PrivateAlbumTeaser`, `AlbumAccessModal`

## Security

- Signed URLs for private images
- Max file size 10MB
- Allowed types: jpeg, png, webp
- Watermark option (Phase 2)
