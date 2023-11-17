import ProductList from "@/components/ProductList/ProductList";
import { getProducts } from "@/lib/api";
import "./globals.css";
import "./reset.css";

export default async function Home() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
