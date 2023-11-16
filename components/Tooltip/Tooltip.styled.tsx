"use client";

import styled from "styled-components";

export const TextWrapper = styled.div`
  width: 300px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.space.s};
  box-shadow: ${({ theme }) => theme.boxShadow(theme.color.grey)};
`;
