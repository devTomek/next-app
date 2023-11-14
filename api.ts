import { productsUrl } from "./routes";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProducts = () =>
  fetch(productsUrl()).then((d) => d.json()) as Promise<Product[]>;
