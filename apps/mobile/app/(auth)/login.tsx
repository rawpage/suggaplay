import { useState } from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";
import { BRAND_DESCRIPTOR, BRAND_NAME } from "@/lib/constants";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export default function LoginScreen() {
  const { configError } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setError(null);

    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured. Add apps/mobile/.env.local.");
      return;
    }

    setLoading(true);

    try {
      const supabase = getSupabase();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (signInError) {
        setError(signInError.message);
      }
    } catch {
      setError("Unable to sign in. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">{BRAND_NAME}</Text>
      <Text variant="title" className="mt-4">
        Welcome back
      </Text>
      <Text variant="muted" className="mt-2">
        {BRAND_DESCRIPTOR}
      </Text>

      {configError ? (
        <Text className="mt-6 text-sm text-brand">{configError}</Text>
      ) : null}

      <View className="mt-10 gap-4">
        <Input
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          secureTextEntry
          autoComplete="password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text className="text-brand text-sm">{error}</Text> : null}
        <Button label="Sign in" loading={loading} onPress={handleSignIn} />
      </View>

      <View className="mt-8 gap-3">
        <Link href="/(auth)/register">
          <Text variant="muted" className="text-center">
            New applicant? Request membership
          </Text>
        </Link>
        <Link href="/(auth)/reset-password">
          <Text variant="muted" className="text-center">
            Forgot password
          </Text>
        </Link>
      </View>
    </Screen>
  );
}
