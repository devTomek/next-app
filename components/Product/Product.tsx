import { Product } from "@/lib/api";
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
        height={500}
        width={500}
      />
      <RightContent>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
      </RightContent>
    </Wrapper>
  );
}
