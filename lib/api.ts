const apiLimit = 10;

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const apiUrl = (path = "") => `${process.env.NEXT_PUBLIC_API_URL}${path}`;

export const getProducts = (limit = apiLimit) =>
  fetch(apiUrl(`/products?limit=${limit}`)).then((d) => d.json()) as Promise<
    Product[]
  >;

export const getProduct = (id: number) =>
  fetch(apiUrl(`/products/${id}`)).then((d) => d.json()) as Promise<Product>;
