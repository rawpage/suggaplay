# 16 — Verification

## Flow

1. User uploads selfie (holding verification pose)
2. User uploads government ID
3. Request enters admin queue (`verification_requests`)
4. Admin approves or rejects
5. On approval: `is_verified = true`, verified badge shown on profile

## Badge

- Visible on profile cards and profile page
- Filter: "Verified only" in search

## Routes

- `/verification` — upload flow
- Admin: verification queue in `(admin)`

## Trust signal

Critical for women-first acquisition strategy. Prominent in onboarding and profile.

## Components

- `VerificationUpload`, `VerificationBadge`, `VerificationQueue` (admin)
