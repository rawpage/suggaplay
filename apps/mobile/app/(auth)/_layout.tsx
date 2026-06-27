import { Stack } from "expo-router";
import { useMemberRouteRedirect } from "@/hooks/use-member-route-redirect";

export default function AuthLayout() {
  useMemberRouteRedirect();

  return <Stack screenOptions={{ headerShown: false, animation: "fade" }} />;
}
