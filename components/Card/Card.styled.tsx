import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  border-radius: 25px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 500ms ease-in-out;
  padding: ${({ theme }) => theme.space.m};
  box-shadow: ${({ theme }) => theme.boxShadow(theme.color.lightGrey)};

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.grey};
`;

export const ImageWrapper = styled(Image)`
  height: auto;
  width: 100%;
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
