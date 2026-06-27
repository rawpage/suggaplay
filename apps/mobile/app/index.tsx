import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useRouter } from "expo-router";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { useSession } from "@/hooks/use-session";
import { BRAND_DESCRIPTOR, BRAND_NAME } from "@/lib/constants";

/** Splash — resolves session and redirects to the correct lifecycle route. */
export default function SplashScreen() {
  const router = useRouter();
  const { isLoading, route, configError } = useSession();

  useEffect(() => {
    if (isLoading) return;
    router.replace(route);
  }, [isLoading, route, router]);

  return (
    <Screen className="items-center justify-center px-8">
      <Text variant="label">{BRAND_NAME}</Text>
      <Text variant="display" className="mt-6 text-center">
        {BRAND_NAME}
      </Text>
      <Text variant="muted" className="mt-4 text-center">
        {configError ?? BRAND_DESCRIPTOR}
      </Text>
      {!configError ? (
        <View className="mt-12">
          <ActivityIndicator color="#FF2747" />
        </View>
      ) : null}
    </Screen>
  );
}
