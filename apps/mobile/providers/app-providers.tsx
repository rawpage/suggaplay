import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { queryClient } from "@/lib/query-client";
import { AuthProvider } from "@/providers/auth-provider";
import { BiometricGate } from "@/components/biometric-gate";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BiometricGate>{children}</BiometricGate>
      </AuthProvider>
    </QueryClientProvider>
  );
}
