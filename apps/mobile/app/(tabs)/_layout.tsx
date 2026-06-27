import { Tabs } from "expo-router";
import { useMemberRouteRedirect } from "@/hooks/use-member-route-redirect";

export default function TabsLayout() {
  useMemberRouteRedirect();

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }} />
  );
}
