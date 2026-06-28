import "react-native-url-polyfill/auto";
import "react-native-gesture-handler";
import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProviders } from "@/providers/app-providers";
import { useAuthDeepLink } from "@/hooks/use-auth-deep-link";

export default function RootLayout() {
  useAuthDeepLink();

  return (
    <SafeAreaProvider>
      <AppProviders>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false, animation: "fade" }} />
      </AppProviders>
    </SafeAreaProvider>
  );
}
