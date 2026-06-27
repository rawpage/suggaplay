import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

export default function NotificationsScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Notifications</Text>
      <Text variant="title" className="mt-4">
        Activity
      </Text>
      <Text variant="muted" className="mt-2">
        Notifications will be built in Step 10.
      </Text>
    </Screen>
  );
}
