import type { NavLink } from "@/types";

export const SITE_NAME = "SuggaPlay";

/** Brand descriptor — not a dating app */
export const BRAND_DESCRIPTOR =
  "A private members' club for modern relationships.";

export const SITE_HEADLINE = "Meet people who live life on their own terms.";

export const SITE_TAGLINE = SITE_HEADLINE;

export const SITE_HERO_BODY =
  "For beautiful connections, honest intentions and unforgettable chemistry.";

export const SITE_DESCRIPTION = BRAND_DESCRIPTOR;

export const LAUNCH_LABEL = "Global";

export const NAV_LINKS: NavLink[] = [
  { label: "Preferences", href: "#intentions" },
  { label: "Membership", href: "#membership" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Join", href: "#waitlist" },
];

export const CLUB_INTRO =
  "SuggaPlay is a curated members' club for ambitious and open-minded people. Whether you're looking for love, intimacy, luxury or something in between, you'll meet people who are honest about what they're looking for from the very beginning.";

export const PROBLEM_HEADLINE = "Dating shouldn't feel like guesswork.";

export const PROBLEM_SUBHEAD = "The best relationships begin with honesty.";

export const HONESTY_MANIFESTO = [
  "Most dating apps expect people to pretend they're all looking for the same thing.",
  "They're not.",
  "Some people want love.",
  "Some want adventure.",
  "Some want luxury.",
  "Some simply want extraordinary chemistry.",
  "SuggaPlay believes honesty is more attractive than pretending.",
];

export const SOLUTION_HEADLINE = "Built around honesty.";

export const SOLUTION_BODY =
  "Attraction shouldn't be complicated. SuggaPlay gives every member the freedom to express what they're genuinely looking for before the first conversation begins.";

export const INTENTIONS_HEADLINE = "Relationship Preferences";

export const INTENTIONS_INTRO =
  "Tell people what you're looking for. Not what dating apps think you should be looking for.";

export const INTENTIONS_CHOOSE = "Choose one or more.";

export const RELATIONSHIP_PREFERENCES = [
  { icon: "❤", label: "Long-term relationship" },
  { icon: "✨", label: "Casual dating" },
  { icon: "🥂", label: "Luxury lifestyle" },
  { icon: "🤝", label: "Mutually beneficial" },
  { icon: "✈", label: "Travel partner" },
  { icon: "🎨", label: "Creative connection" },
  { icon: "🌍", label: "Open relationship" },
  { icon: "🌈", label: "Ethical non-monogamy" },
  { icon: "👀", label: "Exploring" },
] as const;

export const MEMBERSHIP_HEADLINE = "One Membership. Unlimited Access.";

export const MEMBERSHIP_INTRO = [
  "No credits.",
  "No tokens.",
  "No paying every time you want to start a conversation.",
];

export const MEMBERSHIP_INTRO_CLOSING =
  "Just one simple membership designed to let you focus on meeting people, not counting messages.";

export const MEMBERSHIP_FOUNDING = {
  title: "Founding Membership",
  priceLabel: "£9.99/month",
  limitNote: "Limited to the first 500 approved members.",
  description:
    "Become one of SuggaPlay's Founding Members and lock in your membership price for life.",
  features:
    "Enjoy unlimited messaging, unlimited browsing, advanced search and full access to every feature from day one.",
  closing:
    "Once all 500 memberships have been claimed, this price will never be offered again.",
};

export const MEMBERSHIP_STANDARD = {
  title: "Standard Membership",
  priceLabel: "£29.99/month",
  features: [
    "Unlimited access.",
    "Unlimited messaging.",
    "Unlimited browsing.",
    "Advanced search.",
    "Verified community.",
    "No hidden costs.",
    "No pay-per-action.",
    "No surprises.",
  ],
};

export const MEMBERSHIP_PRIVILEGES = {
  headline: "Membership Has Its Privileges",
  paragraphs: [
    "SuggaPlay is a curated members' club, not just another dating app.",
    "Founding Membership isn't simply an introductory offer. It's an opportunity to become part of the community from the very beginning.",
    "Like joining an iconic private members' club before everyone else discovers it, Founding Members will always be recognised as those who helped shape the SuggaPlay community from day one.",
  ],
};

/** @deprecated Use MEMBERSHIP_HEADLINE — kept for any legacy references */
export const MEMBERSHIP_COPY = MEMBERSHIP_HEADLINE;

export const MANIFESTO_BELIEFS = [
  "Life is too short for mixed signals.",
  "Chemistry matters.",
  "Honesty is attractive.",
  "Curiosity is beautiful.",
  "Privacy is essential.",
  "Everyone deserves respect.",
  "Adults should be free to define their own relationships.",
];

export const PERMISSION_HEADLINE = "Permission";

export const PERMISSION_INTRO = [
  "Permission to stop pretending.",
  "Permission to be honest.",
  "Permission to admit you want:",
];

export const PERMISSION_DESIRES = [
  "Love.",
  "Intimacy.",
  "Adventure.",
  "Luxury.",
  "A travel companion.",
  "A mentor.",
  "A benefactor.",
  "A creative muse.",
  "Or simply an unforgettable summer.",
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Express yourself.",
    description: "Choose your intentions before you meet anyone.",
  },
  {
    step: "02",
    title: "Find your people.",
    description: "Meet members whose expectations match yours.",
  },
  {
    step: "03",
    title: "Enjoy the connection.",
    description: "No games. No guessing. No pretending.",
  },
];

export const WAITLIST_HEADLINE = "Request your membership.";

export const WAITLIST_BODY = `${BRAND_DESCRIPTOR} Join the curated global community.`;
