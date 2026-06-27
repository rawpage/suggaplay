/** Shared design tokens — docs/design-bible/ + Master Build Spec (dark mode first on mobile) */

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  brand: "#FF2747",
  muted: "#737373",
  border: "#E5E5E5",
  background: "#FFFFFF",
  foreground: "#000000",
} as const;

/** Mobile app palette — dark mode first (Master Build Spec) */
export const colorsDark = {
  background: "#000000",
  foreground: "#FFFFFF",
  muted: "#A3A3A3",
  mutedForeground: "#737373",
  border: "#262626",
  card: "#0A0A0A",
  brand: "#FF2747",
  destructive: "#FF2747",
} as const;

export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
  8: 64,
  9: 96,
  10: 128,
} as const;

export const typography = {
  label: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "600" as const,
  },
  display: {
    fontSize: 40,
    fontWeight: "700" as const,
    lineHeight: 44,
  },
} as const;

export const motion = {
  durationMin: 180,
  durationMax: 500,
  easing: "ease-out",
} as const;

export const tokens = {
  colors,
  colorsDark,
  spacing,
  typography,
  motion,
} as const;

export type Tokens = typeof tokens;
