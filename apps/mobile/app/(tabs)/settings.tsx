import { useEffect, useState } from "react";
import { Switch, View } from "react-native";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";
import {
  authenticate,
  isBiometricAvailable,
  isBiometricEnabled,
  setBiometricEnabled,
} from "@/lib/auth/biometrics";

export default function SettingsScreen() {
  const { signOut } = useSession();
  const [available, setAvailable] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    isBiometricAvailable().then(setAvailable);
    isBiometricEnabled().then(setEnabled);
  }, []);

  async function toggleBiometric(next: boolean) {
    if (next) {
      const ok = await authenticate();
      if (!ok) return;
    }
    await setBiometricEnabled(next);
    setEnabled(next);
  }

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Settings</Text>
      <Text variant="title" className="mt-4">
        Account
      </Text>
      <Text variant="muted" className="mt-2">
        Subscription and preferences will be added in later steps.
      </Text>

      {available ? (
        <View
          className="mt-8 flex-row items-center justify-between"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, paddingRight: 16 }}>
            <Text variant="body">Require biometric unlock</Text>
            <Text variant="muted">Lock the app with Face ID or Touch ID.</Text>
          </View>
          <Switch
            value={enabled}
            onValueChange={toggleBiometric}
            trackColor={{ true: "#FF2747", false: "#262626" }}
          />
        </View>
      ) : null}

      <Button
        label="Sign out"
        variant="secondary"
        className="mt-10"
        onPress={signOut}
      />
    </Screen>
  );
}
