# SuggaPlay Master Build Specification

> **Source of truth for mobile app development.**
> Primary document: [`SUGGAPLAY-MASTER-BUILD-SPECIFICATION-v1.0.pdf`](./SUGGAPLAY-MASTER-BUILD-SPECIFICATION-v1.0.pdf)

## Product

A private members' club for modern relationships — premium, editorial, dark mode first. Raya / Soho House energy, not Tinder.

## Build order (app)

| Step | Feature | Status |
|------|---------|--------|
| 1 | Expo, deps, NativeWind, Supabase, auth infrastructure | In progress |
| 2 | Navigation (auth / application / status / onboarding / tabs) | In progress |
| 3 | Authentication flows (email, Apple, Google, magic link, biometrics) | Pending |
| 4 | Membership application | Pending |
| 5 | Application review / status | Pending |
| 6 | Onboarding | Pending |
| 7 | Discover | Pending |
| 8 | Profile | Pending |
| 9 | Messaging | Pending |
| 10 | Notifications | Pending |
| 11 | Subscriptions (Stripe) | Pending |
| 12 | Admin | Pending |

## Rules

- One step at a time — stop after each for review
- Explain plan before implementing
- Never call people "users" — use Applicant, Member, Founding Member
- Website is marketing only; **mobile app is the product**
- Dark mode first, photography first, no credits/tokens

## Terminology

| Use | Avoid |
|-----|-------|
| Member | User |
| Applicant | Sign up user |
| Founding Member | Early adopter |
| Membership Committee | Admin team |
