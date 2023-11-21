import Product from "@/components/Product/Product";
import { getProduct } from "@/lib/api";
import { Metadata, ResolvingMetadata } from "next";

interface Params {
  id: number;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface Props {
  params: Params;
  searchParams: SearchParams;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.id);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || ""),
    openGraph: {
      images: [product.image, ...previousImages],
    },
  };
}

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
