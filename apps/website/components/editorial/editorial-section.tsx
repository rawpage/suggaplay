import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EditorialSectionTitleProps = {
  children: ReactNode;
  className?: string;
};

/** W-style large serif section divider. */
export function EditorialSectionTitle({
  children,
  className,
}: EditorialSectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-editorial-section border-b border-border pb-6",
        className,
      )}
    >
      {children}
    </h2>
  );
}

type EditorialKickerProps = {
  children: ReactNode;
  className?: string;
};

export function EditorialKicker({ children, className }: EditorialKickerProps) {
  return (
    <p className={cn("text-editorial-kicker text-foreground", className)}>
      {children}
    </p>
  );
}
