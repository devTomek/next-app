import styled from "styled-components";

export const Wrapper = styled.button`
  all: unset;
  text-transform: uppercase;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow(theme.color.grey)};
  padding: ${({ theme }) => theme.space.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
