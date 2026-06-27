import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

/** Onboarding — full flow in Step 6. */
export default function OnboardingScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Welcome</Text>
      <Text variant="title" className="mt-4">
        Complete your profile
      </Text>
      <Text variant="muted" className="mt-2">
        Onboarding will be built in Step 6 after membership approval.
      </Text>
    </Screen>
  );
}
