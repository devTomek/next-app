"use client";

import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 100px 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      flex-direction: column;
      margin: 0;
    }
  `}
`;

export const ImageWrapper = styled(Image)`
  object-fit: contain;
  height: 500px;
  width: 100%;
  margin-right: 50px;
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
  line-height: 1.15;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: ${({ theme }) => theme.space.m};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
