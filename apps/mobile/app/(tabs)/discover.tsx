import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

export default function DiscoverScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Discover</Text>
      <Text variant="title" className="mt-4">
        Browse members
      </Text>
      <Text variant="muted" className="mt-2">
        Discover will be built in Step 7.
      </Text>
    </Screen>
  );
}
