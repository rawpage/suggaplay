import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { useSession } from "@/hooks/use-session";
import {
  updatePasswordSchema,
  type UpdatePasswordValues,
} from "@/lib/auth/schemas";
import { updatePassword } from "@/lib/auth/auth-service";

/**
 * Reached after a password-reset deep link signs the user in. They set a new
 * password here; the redirect hook then routes them onward.
 */
export default function UpdatePasswordScreen() {
  const router = useRouter();
  const { route } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdatePasswordValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  async function onSubmit(values: UpdatePasswordValues) {
    setError(null);
    const result = await updatePassword(values.password);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setDone(true);
    router.replace(route);
  }

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Account</Text>
      <Text variant="title" className="mt-4">
        Set a new password
      </Text>
      <Text variant="muted" className="mt-2">
        Choose a new password for your account.
      </Text>

      <View className="mt-10 gap-4">
        <FormField
          control={control}
          name="password"
          label="New password"
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
        {done ? (
          <Text className="text-sm text-muted-foreground">
            Password updated.
          </Text>
        ) : null}
        <Button
          label="Update password"
          loading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </Screen>
  );
}
