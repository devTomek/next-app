"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: initial;
`;
