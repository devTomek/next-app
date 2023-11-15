import { getProducts } from "@/api";
import ProductList from "@/components/ProductList/ProductList";
import "./globals.css";
import "./reset.css";

export default async function Home() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
