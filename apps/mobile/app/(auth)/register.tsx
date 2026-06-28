import { useState } from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { registerSchema, type RegisterValues } from "@/lib/auth/schemas";
import { signUpWithPassword } from "@/lib/auth/auth-service";

export default function RegisterScreen() {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  async function onSubmit(values: RegisterValues) {
    setError(null);
    setMessage(null);
    const result = await signUpWithPassword(values.email, values.password);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setMessage("Check your email to confirm your account, then sign in.");
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
          autoComplete="password-new"
          placeholder="At least 8 characters"
        />
        <FormField
          control={control}
          name="confirmPassword"
          label="Confirm password"
          secureTextEntry
          autoComplete="password-new"
          placeholder="Re-enter your password"
        />
        {error ? <Text className="text-brand text-sm">{error}</Text> : null}
        {message ? (
          <Text className="text-sm text-muted-foreground">{message}</Text>
        ) : null}
        <Button
          label="Continue"
          loading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <Link href="/(auth)/login" className="mt-8">
        <Text variant="muted" className="text-center">
          Already have an account? Sign in
        </Text>
      </Link>
    </Screen>
  );
}
