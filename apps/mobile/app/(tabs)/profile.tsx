import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

export default function ProfileScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Profile</Text>
      <Text variant="title" className="mt-4">
        Your profile
      </Text>
      <Text variant="muted" className="mt-2">
        Profile editing will be built in Step 8.
      </Text>
    </Screen>
  );
}
