import styled, { css } from "styled-components";

export const Wrapper = styled.header<{ $scrolledDown: boolean }>`
  top: 0;
  position: sticky;
  height: 50px;
  z-index: 1;
  transition: transform 300ms ease-in-out;
  border-bottom: ${({ theme }) => css`1px solid ${theme.color.lightGrey}`};
  box-shadow: ${({ theme }) => theme.boxShadow(theme.color.lightGrey)};
  margin-bottom: ${({ theme }) => theme.space.m};
  padding: ${({ theme }) => css`0 ${theme.space.m}`};
  background-color: ${({ theme }) => theme.color.white};
  ${({ $scrolledDown }) =>
    $scrolledDown &&
    css`
      transform: translateY(-50px);
    `}
`;
