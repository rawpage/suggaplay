# SuggaPlay Design Tokens

> Extracted from `SuggaPlay_Master_Design_Bible_1.pdf`, `SuggaPlay_Editorial_Design_Bible_2.pdf`, and editorial layout references in `screens/`.
> **If anything conflicts with the PDFs, the PDFs win.**

## Brand DNA

Editorial · Premium · Fashion-led · Minimal · Confident · Contemporary

**Feels like:** A premium fashion publication disguised as a social platform — art directed, not template driven.

**References:** Luxury magazines, gallery catalogues, fashion campaigns, museum sites, Swiss typography, minimalist portfolios (see `screens/editorial-layout-reference-*.png`).

## Design principles

1. Editorial before application (or product)
2. Photography before interface — photography is the hero
3. Typography before decoration — typography creates hierarchy
4. Whitespace is an active, intentional element
5. Reduce until nothing unnecessary remains
6. Every screen feels collectible
7. Function never compromises aesthetic

## Colour system

| Token | Value | Usage |
|-------|-------|--------|
| `--color-black` | `#000000` | Primary black, text on light |
| `--color-white` | `#FFFFFF` | Primary white, backgrounds |
| `--color-accent` | `#FF2747` | **Single accent** — high-value CTAs only |
| Greys | Neutral only | UI chrome, borders, muted text |

**Never** introduce additional brand colours without approval.

## Typography

| Role | Spec |
|------|------|
| Display / headlines | Geist, Inter, or Suisse-style grotesk |
| H1 (desktop) | 72–120px, bold, tight leading |
| H2 | 48–64px |
| Body | 16–18px, restrained |
| Labels / nav | 11–12px, **uppercase** only |

Headlines may overlap imagery. Large type is a primary design element, not decoration.

## Grid & layout

| Breakpoint | Grid |
|------------|------|
| Desktop | 12 columns, max width 1440–1600px |
| Tablet | 8 columns |
| Mobile | 4 columns |

- Generous outer margins
- Large vertical rhythm
- Prefer asymmetry with precise alignment
- Low card density on feeds — immersive, not crowded

## Spacing scale (px)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

Never use off-scale spacing. Never crowd content.

## Photography

- Large monochrome (B&W preferred) editorial photography
- Tight crops, full-bleed where appropriate
- Images carry emotion and hierarchy
- Images may overlap typography

## Motion (Framer Motion)

- Duration: **180–500ms**
- Easing: **ease-out** — cinematic, never playful
- No bouncing
- Subtle fades, reveals, parallax, page transitions
- Motion communicates hierarchy

## Components

### Buttons
- Flat rectangles, minimal radius
- Strong typography, high contrast
- No heavy shadows
- Distinct hover / focus / disabled states

### Forms
- Simple labels, minimal decoration
- Elegant, unobtrusive validation

### Cards
- Editorial layouts — **not** SaaS widgets
- Avoid unnecessary borders and radius

### Navigation
- Sparse, quiet — never dominates content
- Persistent but visually minimal
- Uppercase small labels optional: `[ SECTION ]` style

## Screen-specific guidance

| Screen | Direction |
|--------|-----------|
| Landing | Large statement type, cinematic imagery, clear CTA, scrolling narrative |
| Auth / onboarding | Elegant, progressive disclosure, minimal friction |
| Profiles | Editorial hero image, magazine layout, metadata secondary |
| Discover feed | Immersive visual browsing, oversized media, low density |
| Messaging | Quiet, spacious bubbles, focus on conversation |
| Payments | Premium checkout feel — luxurious, not transactional |

> **Product note:** Monetization is **monthly subscription** (see `docs/00-product-bible.md`), not credits. Apply luxury checkout UX from the design bible to Stripe subscription flows.

## Accessibility

- WCAG AA contrast minimum
- Semantic HTML
- Keyboard navigation
- Visible focus states

## Anti-patterns (never)

- Generic Tailwind demo layouts
- Generic dashboards
- Colourful gradients by default
- Excessive rounded corners
- Clutter, inconsistent typography
- Multiple accent colours
- Playful / bouncy motion

## Engineering mapping

Implement tokens in `app/globals.css` and Tailwind `@theme` when building UI.
All new pages must match this system before merge.

## Source files

| File | Location |
|------|----------|
| Master Design Bible v1.0 | `brand/SuggaPlay_Master_Design_Bible_1.pdf` |
| Editorial Design Bible v1.0 | `brand/SuggaPlay_Editorial_Design_Bible_2.pdf` |
| Editorial layout ref 1 | `screens/editorial-layout-reference-1.png` |
| Editorial layout ref 2 | `screens/editorial-layout-reference-2.png` |
