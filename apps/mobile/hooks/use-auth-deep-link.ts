import { useEffect } from "react";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { exchangeCodeFromUrl } from "@/lib/auth/auth-service";

function isAuthCallback(url: string) {
  return url.includes("auth-callback") && url.includes("code=");
}

function isRecovery(url: string) {
  try {
    return new URL(url).searchParams.get("type") === "recovery";
  } catch {
    return false;
  }
}

/**
 * Listens for auth deep links (magic link / password reset). Exchanges the
 * PKCE code for a session; recovery links route to set a new password while
 * magic links fall through to the normal session-aware redirect.
 */
export function useAuthDeepLink() {
  const router = useRouter();

  useEffect(() => {
    async function handle(url: string | null) {
      if (!url || !isAuthCallback(url)) return;

      const recovery = isRecovery(url);
      const result = await exchangeCodeFromUrl(url);
      if (result.ok && recovery) {
        router.replace("/(auth)/update-password");
      }
    }

    Linking.getInitialURL().then(handle);
    const subscription = Linking.addEventListener("url", ({ url }) =>
      handle(url),
    );

    return () => subscription.remove();
  }, [router]);
}
