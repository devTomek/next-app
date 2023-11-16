import Providers from "@/lib/Providers";
import Header from "@/components/Header/Header";
import { roboto } from "@/fonts";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Product list page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            <main
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </main>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
