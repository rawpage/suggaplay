import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { useSession } from "@/hooks/use-session";
import { BRAND_DESCRIPTOR, BRAND_NAME } from "@/lib/constants";
import { loginSchema, type LoginValues } from "@/lib/auth/schemas";
import { signInWithPassword } from "@/lib/auth/auth-service";

export default function LoginScreen() {
  const router = useRouter();
  const { configError } = useSession();
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: LoginValues) {
    setError(null);
    const result = await signInWithPassword(values.email, values.password);
    if (!result.ok) setError(result.message);
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
        <FormField
          control={control}
          name="email"
          label="Email"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          placeholder="you@example.com"
        />
        <FormField
          control={control}
          name="password"
          label="Password"
          secureTextEntry
          autoComplete="password"
          placeholder="Your password"
        />
        {error ? <Text className="text-brand text-sm">{error}</Text> : null}
        <Button
          label="Sign in"
          loading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
        <Button
          label="Email me a magic link"
          variant="secondary"
          onPress={() => router.push("/(auth)/magic-link")}
        />
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
