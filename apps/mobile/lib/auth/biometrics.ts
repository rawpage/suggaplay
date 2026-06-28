import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";

const BIOMETRIC_PREF_KEY = "suggaplay.biometric.enabled";

/** Whether the device has enrolled biometrics (Face ID / Touch ID / fingerprint). */
export async function isBiometricAvailable(): Promise<boolean> {
  try {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    return hasHardware && isEnrolled;
  } catch {
    return false;
  }
}

export async function isBiometricEnabled(): Promise<boolean> {
  try {
    return (await SecureStore.getItemAsync(BIOMETRIC_PREF_KEY)) === "true";
  } catch {
    return false;
  }
}

export async function setBiometricEnabled(enabled: boolean): Promise<void> {
  try {
    if (enabled) {
      await SecureStore.setItemAsync(BIOMETRIC_PREF_KEY, "true");
    } else {
      await SecureStore.deleteItemAsync(BIOMETRIC_PREF_KEY);
    }
  } catch {
    // best-effort; preference is non-critical
  }
}

export async function authenticate(): Promise<boolean> {
  try {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Unlock SuggaPlay",
      fallbackLabel: "Use passcode",
    });
    return result.success;
  } catch {
    return false;
  }
}
