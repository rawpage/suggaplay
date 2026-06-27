import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";

export default function SettingsScreen() {
  const { signOut } = useSession();

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Settings</Text>
      <Text variant="title" className="mt-4">
        Account
      </Text>
      <Text variant="muted" className="mt-2">
        Subscription and preferences will be added in later steps.
      </Text>
      <Button label="Sign out" variant="secondary" className="mt-10" onPress={signOut} />
    </Screen>
  );
}
