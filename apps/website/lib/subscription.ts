/**
 * Subscription-only monetization.
 * SuggaPlay does NOT use credits, tokens, or pay-per-action billing.
 */

export const SUBSCRIPTION_PLANS = {
  founding: {
    id: "founding" as const,
    name: "Founding Membership",
    priceGbp: 9.99,
    pricePence: 999,
    cap: 500,
    description: "Locked for life — first 500 members",
  },
  standard: {
    id: "standard" as const,
    name: "Standard Membership",
    priceGbp: 29.99,
    pricePence: 2999,
    description: "Unlimited access to all features",
  },
} as const;

export type SubscriptionPlanId = keyof typeof SUBSCRIPTION_PLANS;

/** Statuses that grant men full platform access */
export const ACTIVE_SUBSCRIPTION_STATUSES = [
  "founding",
  "active",
] as const;

export type ActiveSubscriptionStatus =
  (typeof ACTIVE_SUBSCRIPTION_STATUSES)[number];

export function isActiveSubscriptionStatus(
  status: string,
): status is ActiveSubscriptionStatus {
  return (ACTIVE_SUBSCRIPTION_STATUSES as readonly string[]).includes(status);
}

/**
 * Women: free forever. Men: require active subscription.
 */
export function hasPremiumAccess(user: {
  gender: "man" | "woman" | null;
  subscriptionStatus: string;
  isShadowBanned?: boolean;
}): boolean {
  if (user.isShadowBanned) return false;
  if (user.gender === "woman") return true;
  return isActiveSubscriptionStatus(user.subscriptionStatus);
}
