# 05 — Onboarding

Multi-step wizard after registration. Progress saved automatically between steps.

## Step 1 — Gender
- Man / Woman (determines pricing path later; women skip payment)

## Step 2 — Account basics
- Username (unique)
- Age (18+ validated)
- Location (city — default London for launch)

## Step 3 — Profile details
- Headline
- Bio
- Occupation

## Step 4 — Photos
- Upload at least 1 public photo
- Drag-and-drop, compression, preview
- Optional: add private album photos

## Step 5 — Finish
- Review summary
- Set `onboarding_complete = true`
- Redirect to `/discover`

## UX principles

- Progressive disclosure — don't ask everything at once
- Mobile-first, large tap targets
- Back button on each step
- Skeleton while saving
- Persist partial progress to database after each step
