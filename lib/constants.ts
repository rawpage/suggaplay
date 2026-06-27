import type { NavLink } from "@/types";

export const SITE_NAME = "SuggaPlay";
export const SITE_TAGLINE = "Where successful people meet without the games.";
export const SITE_DESCRIPTION =
  "Premium connections in London. Women join free forever. Men pay one monthly membership for unlimited access — no credits, no tokens, no hidden costs.";

export const LAUNCH_CITY = "London";

export const NAV_LINKS: NavLink[] = [
  { label: "Membership", href: "#membership" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Early Access", href: "#waitlist" },
];

export const MEMBERSHIP_POINTS = [
  {
    title: "Unlimited messages",
    description: "No pay-per-message. No unlocking conversations.",
  },
  {
    title: "Full profile access",
    description: "See visitors, favourites, and private albums when granted.",
  },
  {
    title: "One monthly fee",
    description: "Membership, not microtransactions. Pay once. Use freely.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Request early access",
    description:
      "Women join free forever. Men secure founding membership before launch.",
  },
  {
    step: "02",
    title: "Build your profile",
    description:
      "Upload photos, add your headline, and complete verification.",
  },
  {
    step: "03",
    title: "Enter the member feed",
    description:
      "Browse, message, and connect — unlimited, without credit anxiety.",
  },
];

export const COMPARISON = {
  them: "Pay per message. Pay to unlock. Pay to see who liked you.",
  us: "One membership. Unlimited access. No surprises.",
};
