import { cn } from "@/lib/utils";
import { TextInput, type TextInputProps } from "react-native";

type Props = TextInputProps & {
  className?: string;
};

export function Input({ className, style, ...props }: Props) {
  return (
    <TextInput
      placeholderTextColor="#737373"
      className={cn(
        "min-h-12 border border-border bg-card px-4 text-base text-foreground",
        className,
      )}
      style={[
        {
          minHeight: 48,
          borderWidth: 1,
          borderColor: "#262626",
          backgroundColor: "#0A0A0A",
          paddingHorizontal: 16,
          color: "#FFFFFF",
          fontSize: 16,
        },
        style,
      ]}
      {...props}
    />
  );
}
