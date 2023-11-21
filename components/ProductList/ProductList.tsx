"use client";

import Card from "@/components/Card/Card";
import { Product, getProducts } from "@/lib/api";
import { productRoute } from "@/lib/routes";
import { useQuery } from "@tanstack/react-query";
import { LinkWrapper, Wrapper } from "./ProductList.styled";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: products,
  });

  return (
    <Wrapper>
      {data.map(({ id, description, image, price, title }, index) => (
        <LinkWrapper key={id} href={productRoute(id)}>
          <Card
            index={index}
            alt={title}
            buttonText="Add to cart"
            description={description}
            price={price}
            src={image}
            title={title}
            onClick={(e) => {
              e.preventDefault();
              alert("TODO");
            }}
          />
        </LinkWrapper>
      ))}
    </Wrapper>
  );
}
