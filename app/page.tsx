import Providers from "@/Providers";
import ProductList from "@/components/ProductList/ProductList";
import { roboto } from "@/fonts";
import "./globals.css";
import "./reset.css";

export default async function Home() {
  return (
    <Providers>
      <main className={roboto.className}>
        <ProductList />
      </main>
    </Providers>
  );
}
