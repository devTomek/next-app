"use client";

import { Product, getProduct } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import {
  Description,
  ImageWrapper,
  Price,
  RightContent,
  Title,
  Wrapper,
} from "./Product.styled";

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const { id } = product;
  const { data } = useQuery({
    queryKey: [`product${id}`],
    queryFn: () => getProduct(id),
    initialData: product,
  });
  const { image, title, description, price } = data;

  return (
    <Wrapper>
      <ImageWrapper
        alt="product page image"
        src={image}
        sizes="50vw"
        height={500}
        width={500}
      />
      <RightContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
      </RightContent>
    </Wrapper>
  );
}
