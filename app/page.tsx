import ProductList from "@/components/ProductList/ProductList";
import { getProducts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page, product list page",
};

export default async function HomePage() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
