import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

export default function EventsScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Events</Text>
      <Text variant="title" className="mt-4">
        Members' events
      </Text>
      <Text variant="muted" className="mt-2">
        Events will be added in a future release.
      </Text>
    </Screen>
  );
}
