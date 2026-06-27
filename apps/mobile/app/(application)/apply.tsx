import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

/** Membership application — multi-step flow in Step 4. */
export default function ApplyScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Application</Text>
      <Text variant="title" className="mt-4">
        Apply for membership
      </Text>
      <Text variant="muted" className="mt-2">
        The curated application flow will be built in Step 4.
      </Text>
    </Screen>
  );
}
