"use client";

import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
`;

export const ImageWrapper = styled(Image)`
  object-fit: contain;
  height: 500px;
  width: 100%;
`;

export const RightContent = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  margin-bottom: ${({ theme }) => theme.space.m};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: ${({ theme }) => theme.space.m};
  line-height: 1.15;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
