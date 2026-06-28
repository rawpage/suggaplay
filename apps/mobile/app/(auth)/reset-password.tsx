import { useState } from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import {
  requestEmailSchema,
  type RequestEmailValues,
} from "@/lib/auth/schemas";
import { sendPasswordReset } from "@/lib/auth/auth-service";

export default function ResetPasswordScreen() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm<RequestEmailValues>({
    resolver: zodResolver(requestEmailSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: RequestEmailValues) {
    setError(null);
    const result = await sendPasswordReset(values.email);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <Screen className="justify-center px-6">
        <Text variant="label">Account</Text>
        <Text variant="title" className="mt-4">
          Check your email
        </Text>
        <Text variant="muted" className="mt-2">
          If an account exists for {getValues("email")}, we sent a link to reset
          your password. Open it on this device.
        </Text>
        <Link href="/(auth)/login" className="mt-8">
          <Text variant="muted" className="text-center">
            Back to sign in
          </Text>
        </Link>
      </Screen>
    );
  }

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Account</Text>
      <Text variant="title" className="mt-4">
        Reset password
      </Text>
      <Text variant="muted" className="mt-2">
        Enter your email and we'll send a link to set a new password.
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
        {error ? <Text className="text-brand text-sm">{error}</Text> : null}
        <Button
          label="Send reset link"
          loading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <Link href="/(auth)/login" className="mt-8">
        <Text variant="muted" className="text-center">
          Back to sign in
        </Text>
      </Link>
    </Screen>
  );
}
