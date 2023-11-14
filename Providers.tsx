"use client";

import { theme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useRef } from "react";
import { ThemeProvider } from "styled-components";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const clientRef = useRef(new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={clientRef.current}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
