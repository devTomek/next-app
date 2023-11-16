import { Product } from "@/api";
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
  return (
    <Wrapper>
      <ImageWrapper
        alt="product page image"
        src={product.image}
        sizes="50vw"
        width={500}
        height={500}
      />
      <RightContent>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
      </RightContent>
    </Wrapper>
  );
}
