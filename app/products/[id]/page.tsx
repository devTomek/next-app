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
  const { image, price, description, title } = product;

  return (
    <Product
      description={description}
      image={image}
      price={price}
      title={title}
    />
  );
}
