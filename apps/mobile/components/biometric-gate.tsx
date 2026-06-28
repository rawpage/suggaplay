import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AppState, View } from "react-native";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";
import {
  authenticate,
  isBiometricEnabled,
} from "@/lib/auth/biometrics";

type Props = { children: ReactNode };

/**
 * Optional biometric lock. When the user has enabled it and a session exists,
 * the app contents are hidden behind a Face ID / Touch ID prompt on launch and
 * whenever the app returns from the background. No-op when disabled.
 */
export function BiometricGate({ children }: Props) {
  const { session } = useSession();
  const [enabled, setEnabled] = useState(false);
  const [locked, setLocked] = useState(true);
  const promptingRef = useRef(false);

  useEffect(() => {
    isBiometricEnabled().then(setEnabled);
  }, [session]);

  const tryUnlock = useCallback(async () => {
    if (promptingRef.current) return;
    promptingRef.current = true;
    const ok = await authenticate();
    promptingRef.current = false;
    if (ok) setLocked(false);
  }, []);

  useEffect(() => {
    if (enabled && session && locked) {
      tryUnlock();
    }
  }, [enabled, session, locked, tryUnlock]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "background") setLocked(true);
    });
    return () => subscription.remove();
  }, []);

  const shouldLock = enabled && Boolean(session) && locked;

  if (!shouldLock) return <>{children}</>;

  return (
    <Screen className="items-center justify-center px-6">
      <Text variant="label">SuggaPlay</Text>
      <Text variant="title" className="mt-4">
        Locked
      </Text>
      <Text variant="muted" className="mt-2 text-center">
        Unlock with Face ID or your device passcode to continue.
      </Text>
      <View className="mt-10 w-full">
        <Button label="Unlock" onPress={tryUnlock} />
      </View>
    </Screen>
  );
}
