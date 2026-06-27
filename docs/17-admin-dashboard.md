# 17 — Admin Dashboard

## Route group

`(admin)/` — protected by admin role middleware

## Sections

- **Users** — search, view, shadow ban, delete
- **Photos** — moderation queue, approve/reject
- **Reports** — review reported users/content
- **Verification queue** — approve/reject ID verification
- **Revenue** — MRR, subscription count, founding slots remaining
- **Analytics** — signups, DAU, gender ratio, city density

## Actions

- Shadow ban (user appears offline, invisible in search)
- Hard ban (disable account)
- Approve/reject photos and verifications
- Resolve reports

## Components

- `AdminSidebar`, `UserTable`, `ReportQueue`, `VerificationQueue`, `RevenueChart`
