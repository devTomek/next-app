import Providers from "@/Providers";
import { getProducts } from "@/api";
import ProductList from "@/components/ProductList/ProductList";
import { roboto } from "@/fonts";
import "./globals.css";
import "./reset.css";

export default async function Home() {
  const products = await getProducts();

  return (
    <Providers>
      <main
        className={roboto.className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductList products={products} />
      </main>
    </Providers>
  );
}
