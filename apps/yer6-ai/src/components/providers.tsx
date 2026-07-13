"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { I18nProvider } from "@/components/i18n-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    <I18nProvider>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider delayDuration={250}>{children}</TooltipProvider>
        </QueryClientProvider>
      </SessionProvider>
    </I18nProvider>
  );
}
