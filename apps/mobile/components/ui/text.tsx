import { cn } from "@/lib/utils";
import type { TextProps, TextStyle } from "react-native";
import { Text as RNText } from "react-native";

type TextVariant = "display" | "title" | "body" | "label" | "muted";

type Props = TextProps & {
  variant?: TextVariant;
  className?: string;
};

const variantClass: Record<TextVariant, string> = {
  display: "text-4xl font-bold tracking-tight text-foreground",
  title: "text-2xl font-semibold tracking-tight text-foreground",
  body: "text-base leading-6 text-foreground",
  label: "text-label uppercase text-muted-foreground",
  muted: "text-sm leading-5 text-muted-foreground",
};

const variantStyle: Record<TextVariant, TextStyle> = {
  display: { fontSize: 36, fontWeight: "700", color: "#FFFFFF" },
  title: { fontSize: 24, fontWeight: "600", color: "#FFFFFF" },
  body: { fontSize: 16, lineHeight: 24, color: "#FFFFFF" },
  label: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#A3A3A3",
  },
  muted: { fontSize: 14, lineHeight: 20, color: "#A3A3A3" },
};

export function Text({
  variant = "body",
  className,
  style,
  ...props
}: Props) {
  return (
    <RNText
      className={cn(variantClass[variant], className)}
      style={[variantStyle[variant], style]}
      {...props}
    />
  );
}
