import { useEffect } from "react";
import { usePathname, useRouter, useSegments } from "expo-router";
import { useSession } from "@/hooks/use-session";
import type { MemberRoute } from "@/lib/auth/types";

function segmentGroup(segments: string[]) {
  return segments[0]?.replace(/[()]/g, "") ?? "";
}

function routeMatchesSegments(route: MemberRoute, segments: string[]): boolean {
  const group = segmentGroup(segments);

  if (route === "/(auth)/login") return group === "auth";
  if (route === "/(application)/apply") return group === "application";
  if (route === "/(status)/membership-review") return group === "status";
  if (route === "/(onboarding)") return group === "onboarding";
  if (route === "/(tabs)/home") return group === "tabs";

  return false;
}

/** Keeps the member on the correct lifecycle route as session state changes. */
export function useMemberRouteRedirect(options?: { enabled?: boolean }) {
  const enabled = options?.enabled ?? true;
  const router = useRouter();
  const pathname = usePathname();
  const segments = useSegments() as string[];
  const { isLoading, route } = useSession();

  useEffect(() => {
    if (!enabled || isLoading) return;

    const onSplash = pathname === "/" || pathname === "/index";
    if (onSplash) return;

    if (!routeMatchesSegments(route, segments)) {
      router.replace(route);
    }
  }, [enabled, isLoading, route, router, segments, pathname]);
}
