# 22 — UI Design System

> **Visual source of truth:** `docs/design-bible/` — read `00-design-tokens.md` and both PDFs before implementing this doc.

## Tokens (from design bible)

```css
/* Colours — no other brand colours */
--color-black: #000000;
--color-white: #ffffff;
--color-accent: #ff2747; /* CTAs only */

/* Spacing scale (px) */
4, 8, 12, 16, 24, 32, 48, 64, 96, 128

/* Grid */
/* Desktop: 12 col, max 1440–1600px | Tablet: 8 | Mobile: 4 */

/* Motion */
/* 180–500ms, ease-out, Framer Motion, no bounce */
```

## Foundation

- **shadcn/ui** as primitives — **customise visually** to match editorial spec (flat, minimal radius)
- **8px-based spacing grid** (see token scale above)
- **Dark editorial default** — black/white monochrome + `#FF2747` accent
- **Framer Motion** — cinematic fades/reveals only
- **Typography:** Geist / Inter grotesk; oversized display headlines

## Typography scale

| Element | Desktop |
|---------|---------|
| H1 | 72–120px, bold |
| H2 | 48–64px |
| Body | 16–18px |
| Labels / nav | 11–12px uppercase |

## Mobile-first breakpoints

- 320px — mobile (4-col grid)
- 768px — tablet (8-col)
- 1024px+ — desktop (12-col)
- 1440–1600px — max content width

## UX principles

1. Editorial before product — magazine layout, not app template
2. Photography hero; metadata secondary
3. Low-density discover feed
4. Quiet nav and messaging UI
5. Large tap targets on mobile without clutter

## Anti-patterns

No generic dashboards, gradient defaults, excessive radius, multiple accents, or Tailwind demo layouts.

## Product override

Design bible mentions token economy in places; **product uses subscription model** — apply luxury checkout UX to Stripe subscriptions (see `docs/12-subscription-system.md`).
