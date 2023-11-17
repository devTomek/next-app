import {
  Description,
  ImageWrapper,
  Price,
  RightContent,
  Title,
  Wrapper,
} from "./Product.styled";

interface ProductProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function Product({
  description,
  image,
  price,
  title,
}: ProductProps) {
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
