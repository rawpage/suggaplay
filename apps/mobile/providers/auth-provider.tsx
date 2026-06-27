import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { fetchMemberAccessState } from "@/lib/auth/member-state";
import { resolveMemberRoute } from "@/lib/auth/resolve-route";
import type { MemberAccessState, MemberRoute } from "@/lib/auth/types";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

type AuthContextValue = {
  session: Session | null;
  accessState: MemberAccessState;
  route: MemberRoute;
  isLoading: boolean;
  configError: string | null;
  signOut: () => Promise<void>;
  refreshAccessState: () => Promise<void>;
};

const defaultAccessState: MemberAccessState = {
  hasSession: false,
  hasProfile: false,
  onboardingComplete: false,
  applicationStatus: "none",
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [accessState, setAccessState] =
    useState<MemberAccessState>(defaultAccessState);
  const [isLoading, setIsLoading] = useState(true);
  const [configError, setConfigError] = useState<string | null>(() =>
    isSupabaseConfigured()
      ? null
      : "Missing Supabase env. Copy apps/mobile/.env.example to .env.local.",
  );

  const refreshAccessState = useCallback(async (nextSession?: Session | null) => {
    const activeSession = nextSession === undefined ? session : nextSession;
    const state = await fetchMemberAccessState(activeSession);
    setAccessState(state);
  }, [session]);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setIsLoading(false);
      return;
    }

    let mounted = true;

    async function init() {
      try {
        const supabase = getSupabase();
        const { data } = await supabase.auth.getSession();
        if (!mounted) return;

        setSession(data.session);
        const state = await fetchMemberAccessState(data.session);
        if (!mounted) return;
        setAccessState(state);
      } catch {
        if (mounted) {
          setConfigError("Unable to connect to Supabase. Check your .env.local.");
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    init();

    try {
      const supabase = getSupabase();
      const { data: listener } = supabase.auth.onAuthStateChange(
        async (_event, nextSession) => {
          setSession(nextSession);
          const state = await fetchMemberAccessState(nextSession);
          setAccessState(state);
          setIsLoading(false);
        },
      );

      return () => {
        mounted = false;
        listener.subscription.unsubscribe();
      };
    } catch {
      setIsLoading(false);
      return () => {
        mounted = false;
      };
    }
  }, []);

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured()) return;
    const supabase = getSupabase();
    await supabase.auth.signOut();
  }, []);

  const route = useMemo(() => resolveMemberRoute(accessState), [accessState]);

  const value = useMemo(
    () => ({
      session,
      accessState,
      route,
      isLoading,
      configError,
      signOut,
      refreshAccessState,
    }),
    [session, accessState, route, isLoading, configError, signOut, refreshAccessState],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useSession() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSession must be used within AuthProvider");
  }
  return context;
}
