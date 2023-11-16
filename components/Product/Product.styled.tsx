"use client";

import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
`;

export const ImageWrapper = styled(Image)`
  object-fit: contain;
  height: 500px;
  width: 100%;
`;

export const RightContent = styled.div`
  width: 100%;
`;

export const Title = styled.h1``;

export const Description = styled.p``;

export const Price = styled.p``;
