import ProductList from "@/components/ProductList/ProductList";
import { getProducts } from "@/lib/api";
import { Metadata } from "next";
import "./globals.css";
import "./reset.css";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Home",
  description: "Home page, product list page",
};

export default async function HomePage() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
