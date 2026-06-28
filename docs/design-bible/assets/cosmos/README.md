# SuggaPlay — Cosmos image library

Source mood board: [cosmos.so/rawlove/suggaplay](https://www.cosmos.so/rawlove/suggaplay)

Collected **28 Jun 2026** for app editorial imagery, discover placeholders, onboarding heroes, and design reference.

## Folder layout

| Path | Contents |
|------|----------|
| `originals/` | Full-resolution files from Cosmos CDN (UUID filenames) |
| `manifest.json` | Index: id, filename, dimensions, format, source URL |

## Usage rules

- **Design reference** — always OK during build
- **In-app placeholders** — OK for dev/staging
- **Production** — confirm you own or have licensed each image before shipping (many Cosmos saves are third-party editorial)

## Notes

- Cosmos labels some tiles **Suggestive** when logged out; CDN URLs still resolve at full resolution
- Two assets are **AVIF** (collection cover + one editorial); convert to JPEG/WebP before use in React Native if needed
- `da09a6f2-…` is the @rawlove profile avatar (small, skip for app imagery)
- `42cb6f77-…` is the collection cover image

## Re-sync

Cosmos lazy-loads the grid in the browser, so scrolling only captures ~90 images. The full collection is fetched via Cosmos GraphQL (`GetClusterElements`).

```bash
node scripts/download-cosmos-collection.mjs rawlove suggaplay
```

This paginates all elements, downloads missing files to `originals/`, and regenerates `manifest.json`.
