import type { Feature, NavLink } from "@/types";

export const SITE_NAME = "SuggaPlay";
export const SITE_TAGLINE = "Play. Create. Connect.";
export const SITE_DESCRIPTION =
  "The next-generation platform where creators, fans, and communities come together to play, share, and grow.";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Waitlist", href: "#waitlist" },
];

export const FEATURES: Feature[] = [
  {
    id: "live-play",
    title: "Live Play Sessions",
    description:
      "Host interactive sessions with real-time engagement, polls, and rewards that keep your audience hooked.",
    icon: "Radio",
  },
  {
    id: "creator-tools",
    title: "Creator Studio",
    description:
      "Professional-grade tools to produce, schedule, and monetize content — all from one beautiful dashboard.",
    icon: "Sparkles",
  },
  {
    id: "community",
    title: "Community Hub",
    description:
      "Build loyal fan communities with exclusive perks, tiered memberships, and direct creator-to-fan connections.",
    icon: "Users",
  },
  {
    id: "analytics",
    title: "Smart Analytics",
    description:
      "Understand what resonates with actionable insights on engagement, retention, and revenue growth.",
    icon: "BarChart3",
  },
  {
    id: "rewards",
    title: "Reward Engine",
    description:
      "Gamify the experience with points, badges, and unlockables that turn casual viewers into superfans.",
    icon: "Trophy",
  },
  {
    id: "secure",
    title: "Secure & Scalable",
    description:
      "Enterprise-grade infrastructure built to scale from your first stream to millions of concurrent viewers.",
    icon: "Shield",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Join the Waitlist",
    description: "Sign up early and secure your spot as a founding creator or fan.",
  },
  {
    step: 2,
    title: "Set Up Your Profile",
    description: "Customize your space, connect your channels, and invite your community.",
  },
  {
    step: 3,
    title: "Start Playing",
    description: "Go live, engage your audience, and watch your community thrive.",
  },
];
