# 04 — Authentication

## Pages

- `/login`
- `/register`
- `/forgot-password`
- `/reset-password`

## Features

- Supabase Auth (email + password)
- Email verification before full access
- Middleware route protection for `(discover)`, `(profile)`, `(messages)`, `(account)`, `(admin)`
- Session management via `@supabase/ssr`
- Redirect after login: onboarding if incomplete, else `/discover`
- Redirect unauthenticated users to `/login`

## Middleware rules

| Route group | Auth required |
|---|---|
| `(marketing)` | No |
| `(auth)` | No (redirect if logged in) |
| `(discover)` + others | Yes |
| `(admin)` | Yes + admin role |

## Components

- `LoginForm`, `RegisterForm`, `ForgotPasswordForm`, `ResetPasswordForm`
- React Hook Form + Zod validation
- Loading and error states

## Do not build yet

Profile pages, discover feed, onboarding steps beyond auth shell.
