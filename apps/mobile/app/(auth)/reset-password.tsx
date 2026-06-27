import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";

/** Password reset — full flow in Step 3. */
export default function ResetPasswordScreen() {
  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Account</Text>
      <Text variant="title" className="mt-4">
        Reset password
      </Text>
      <Text variant="muted" className="mt-2">
        Password reset will be added in Step 3.
      </Text>
    </Screen>
  );
}
