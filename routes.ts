const apiLimit = 10;

export const homeUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}${path}`;

export const productsUrl = (limit = apiLimit) =>
  homeUrl(`/products?limit=${limit}`);
