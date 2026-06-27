import type { ReactNode } from "react";
import { View, type ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";

type ScreenProps = ViewProps & {
  children: ReactNode;
  safe?: boolean;
  className?: string;
};

export function Screen({
  children,
  safe = true,
  className,
  style,
  ...props
}: ScreenProps) {
  const Container = safe ? SafeAreaView : View;

  return (
    <Container
      className={cn("flex-1 bg-background", className)}
      style={[{ flex: 1, backgroundColor: "#000000" }, style]}
      {...props}
    >
      {children}
    </Container>
  );
}
