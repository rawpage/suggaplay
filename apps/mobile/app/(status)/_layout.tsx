import { Stack } from "expo-router";
import { useMemberRouteRedirect } from "@/hooks/use-member-route-redirect";

export default function StatusLayout() {
  useMemberRouteRedirect();

  return <Stack screenOptions={{ headerShown: false, animation: "fade" }} />;
}
