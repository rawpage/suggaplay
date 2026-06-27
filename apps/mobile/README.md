# @suggaplay/mobile

Expo + React Native application for the full SuggaPlay product experience.

## Stack

- Expo SDK 52
- Expo Router (file-based navigation)
- TypeScript
- NativeWind v4 (Tailwind for React Native)
- TanStack React Query
- Supabase (`lib/supabase/client.ts` + SecureStore)
- React Hook Form + Zod (`lib/forms.ts`)

## Route map

| Route | Screen |
|-------|--------|
| `/` | Splash |
| `/onboarding` | Onboarding |
| `/apply` | Apply for Membership |
| `/membership-review` | Membership Review |
| `/(tabs)/home` | Home |
| `/(tabs)/discover` | Discover |
| `/(tabs)/messages` | Messages |
| `/(tabs)/notifications` | Notifications |
| `/(tabs)/events` | Events |
| `/(tabs)/profile` | Profile |
| `/(tabs)/settings` | Settings |

## Commands

```bash
# From repo root
npm run dev:mobile

# From this directory
npm run dev
npm run ios
npm run android
npm run typecheck
```

## Environment

Copy `.env.example` to `.env.local`:

```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

## Status

Project configured — **no UI implemented yet**. All screens are routing stubs.
