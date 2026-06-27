import { cn } from "@/lib/utils";
import {
  Pressable,
  type PressableProps,
  ActivityIndicator,
  Text as RNText,
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "ghost";

type Props = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  loading?: boolean;
  className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-brand",
  secondary: "border border-border bg-card",
  ghost: "bg-transparent",
};

const variantStyle: Record<ButtonVariant, object> = {
  primary: { backgroundColor: "#FF2747" },
  secondary: { borderWidth: 1, borderColor: "#262626", backgroundColor: "#0A0A0A" },
  ghost: { backgroundColor: "transparent" },
};

const labelClass: Record<ButtonVariant, string> = {
  primary: "text-white font-medium",
  secondary: "text-foreground font-medium",
  ghost: "text-foreground font-medium",
};

const labelStyle: Record<ButtonVariant, object> = {
  primary: { color: "#FFFFFF", fontWeight: "500" },
  secondary: { color: "#FFFFFF", fontWeight: "500" },
  ghost: { color: "#FFFFFF", fontWeight: "500" },
};

export function Button({
  label,
  variant = "primary",
  loading = false,
  disabled,
  className,
  style,
  ...props
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      className={cn(
        "min-h-12 items-center justify-center px-6",
        variantClass[variant],
        isDisabled && "opacity-50",
        className,
      )}
      style={[
        {
          minHeight: 48,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
          opacity: isDisabled ? 0.5 : 1,
        },
        variantStyle[variant],
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <RNText className={labelClass[variant]} style={labelStyle[variant]}>
          {label}
        </RNText>
      )}
    </Pressable>
  );
}
