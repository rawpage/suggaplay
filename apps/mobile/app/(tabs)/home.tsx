import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Home</Text>
      <Text variant="title" className="mt-4">
        Discover members
      </Text>
      <Text variant="muted" className="mt-2">
        The home feed will be built in Step 7.
      </Text>
    </Screen>
  );
}
