import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 600px;
  border-radius: 25px;
  transform: scale(1);
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
  padding: ${({ theme }) => theme.space.m};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow(theme.color.grey)};
    transform: scale(1.02);
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

export const Description = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.color.grey};
  margin: ${({ theme }) =>
    css`
      ${theme.space.s} 0
    `};
`;

export const ImageWrapper = styled(Image)`
  object-fit: contain;
  height: 300px;
  width: auto;
  padding: ${({ theme }) => theme.space.m};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;
