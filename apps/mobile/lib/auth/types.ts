/** Member lifecycle routes — maps to Expo Router groups */
export type MemberRoute =
  | "/(auth)/login"
  | "/(application)/apply"
  | "/(status)/membership-review"
  | "/(onboarding)"
  | "/(tabs)/home";

export type MemberAccessState = {
  hasSession: boolean;
  hasProfile: boolean;
  onboardingComplete: boolean;
  /** Set when applications table exists — placeholder for Step 5 */
  applicationStatus: "none" | "pending" | "approved" | "waitlisted" | "rejected";
};
