import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

export default function MessagesScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Messages</Text>
      <Text variant="title" className="mt-4">
        Conversations
      </Text>
      <Text variant="muted" className="mt-2">
        Messaging will be built in Step 9.
      </Text>
    </Screen>
  );
}
