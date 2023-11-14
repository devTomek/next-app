"use client";

import Button from "@/components/Button/Button";
import { ImageProps } from "next/image";
import {
  Description,
  Footer,
  ImageWrapper,
  Price,
  Title,
  Wrapper,
} from "./Card.styled";

interface CardProps {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  title: string;
  description: string;
  price: number;
  buttonText: string;
}

export default function Card({
  alt,
  src,
  buttonText,
  description,
  price,
  title,
}: CardProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <ImageWrapper src={src} alt={alt} sizes="25vw" width={300} height={200} />

      <Footer>
        <Price>${price}</Price>
        <Button>{buttonText}</Button>
      </Footer>
    </Wrapper>
  );
}
