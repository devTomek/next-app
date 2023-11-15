"use client";

import { Product } from "@/api";
import Card from "@/components/Card/Card";
import { Wrapper } from "./ProductList.styled";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <Wrapper>
      {products.map(({ id, description, image, price, title }) => (
        <Card
          key={id}
          alt={title}
          buttonText="Add to cart"
          description={description}
          price={price}
          src={image}
          title={title}
        />
      ))}
    </Wrapper>
  );
}
