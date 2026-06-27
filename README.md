# SuggaPlay

A production-ready Next.js 15 landing page for **SuggaPlay** — a creator platform where communities play, create, and connect.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Linting:** ESLint + Prettier

## Project Structure

```
app/           # Next.js App Router pages and layouts
components/    # Reusable UI and landing page components
  layout/      # Header, footer
  landing/     # Landing page sections
  motion/      # Framer Motion wrappers
  ui/          # shadcn/ui components
hooks/         # Custom React hooks
lib/           # Utilities and constants
services/      # API and business logic
types/         # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm 9+

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript checks |

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL for metadata |
| `NEXT_PUBLIC_WAITLIST_API_URL` | Optional waitlist API endpoint |

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration needed.
4. Add environment variables from `.env.example` in the Vercel dashboard.
5. Deploy.

Alternatively, use the Vercel CLI:

```bash
npx vercel
```

## License

Private — All rights reserved.
