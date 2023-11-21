import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import Providers from "@/lib/Providers";
import { roboto } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";
import "./reset.css";

interface RootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <main>
            <PageContainer>{children}</PageContainer>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
