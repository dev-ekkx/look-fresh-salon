"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useMobileDetection from "@/hooks/useMobileDetection";
import MobileOnlyPrompt from "@/components/mobile-only-prompt";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});
const ReactQueryContext = ({ children }: { children: React.ReactNode }) => {
  const isMobileDevice = useMobileDetection();
  return (
    <QueryClientProvider client={queryClient}>
      {isMobileDevice ? children : <MobileOnlyPrompt />}
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default ReactQueryContext;
