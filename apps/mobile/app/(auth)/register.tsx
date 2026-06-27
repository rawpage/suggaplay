import { useState } from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setError(null);
    setMessage(null);

    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured. Add apps/mobile/.env.local.");
      return;
    }

    setLoading(true);

    try {
      const supabase = getSupabase();
      const { error: signUpError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      setMessage("Check your email to confirm your account, then sign in.");
    } catch {
      setError("Unable to register. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Apply</Text>
      <Text variant="title" className="mt-4">
        Become a member
      </Text>
      <Text variant="muted" className="mt-2">
        Create your applicant account to begin membership review.
      </Text>

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
          autoComplete="password-new"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text className="text-brand text-sm">{error}</Text> : null}
        {message ? <Text className="text-sm text-muted-foreground">{message}</Text> : null}
        <Button label="Continue" loading={loading} onPress={handleSignUp} />
      </View>

      <Link href="/(auth)/login" className="mt-8">
        <Text variant="muted" className="text-center">
          Already have an account? Sign in
        </Text>
      </Link>
    </Screen>
  );
}
