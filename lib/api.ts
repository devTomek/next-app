export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const apiUrl = (path = "") => `${process.env.NEXT_PUBLIC_API_URL}${path}`;

export const getProducts = () =>
  fetch(apiUrl("/products")).then((d) => d.json()) as Promise<Product[]>;

export const getProduct = (id: number) =>
  fetch(apiUrl(`/products/${id}`)).then((d) => d.json()) as Promise<Product>;
