import type { MemberAccessState, MemberRoute } from "./types";

/**
 * Determines where an applicant/member should land based on session + profile state.
 * Application scoring (Step 5) will extend this when `applications` table exists.
 */
export function resolveMemberRoute(state: MemberAccessState): MemberRoute {
  if (!state.hasSession) {
    return "/(auth)/login";
  }

  if (state.applicationStatus === "pending") {
    return "/(status)/membership-review";
  }

  if (state.applicationStatus === "waitlisted" || state.applicationStatus === "rejected") {
    return "/(status)/membership-review";
  }

  if (!state.hasProfile || state.applicationStatus === "none") {
    return "/(application)/apply";
  }

  if (!state.onboardingComplete) {
    return "/(onboarding)";
  }

  return "/(tabs)/home";
}
