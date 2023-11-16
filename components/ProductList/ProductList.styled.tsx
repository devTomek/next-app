"use client";

import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: initial;
`;
