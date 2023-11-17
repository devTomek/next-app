"use client";

import { theme } from "@/lib/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
