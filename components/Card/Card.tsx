import Button from "@/components/Button/Button";
import FadeIn from "@/components/FadeIn/FadeIn";
import Tooltip from "@/components/Tooltip/Tooltip";
import { ImageProps } from "next/image";
import { MouseEvent } from "react";
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
  onClick?: (e: MouseEvent) => void;
}

export default function Card({
  alt,
  src,
  buttonText,
  description,
  price,
  title,
  onClick,
}: CardProps) {
  return (
    <FadeIn>
      <Wrapper>
        <Title>{title}</Title>
        <Tooltip text={description}>
          <Description>{description}</Description>
        </Tooltip>

        <ImageWrapper
          src={src}
          alt={alt}
          sizes="25vw"
          width={200}
          height={300}
        />

        <Footer>
          <Price>${price}</Price>
          <Button onClick={onClick}>{buttonText}</Button>
        </Footer>
      </Wrapper>
    </FadeIn>
  );
}
