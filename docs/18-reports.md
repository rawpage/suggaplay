# 18 — Reports & Blocking

## Report reasons

- Spam
- Fake account
- Harassment
- Inappropriate content / nudity
- Other (free text)

## Flow

1. User clicks "Report" on profile or in chat
2. Select reason + optional details
3. Stored in `reports` table
4. Admin reviews in dashboard
5. Action taken (warn, shadow ban, hard ban)

## Block users

- Blocked users cannot message or view each other
- Block list in `/account/settings`

## Components

- `ReportModal`, `BlockButton`, `BlockedUsersList`
