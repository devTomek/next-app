import Product from "@/components/Product/Product";
import { getProduct } from "@/lib/api";

interface Params {
  id: number;
}

interface ProductPageProps {
  params: Params;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  return <Product product={product} />;
}
