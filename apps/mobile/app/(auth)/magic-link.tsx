import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

/** Magic link — full flow in Step 3. */
export default function MagicLinkScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Sign in</Text>
      <Text variant="title" className="mt-4">
        Magic link
      </Text>
      <Text variant="muted" className="mt-2">
        Email magic link authentication will be added in Step 3.
      </Text>
    </Screen>
  );
}
