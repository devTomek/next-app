"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  padding: ${({ theme }) => css`0 ${theme.space.m}`};
  margin-top: ${({ theme }) => theme.space.m};
  border-top: ${({ theme }) => css`1px solid ${theme.color.lightGrey}`};
  box-shadow: ${({ theme }) => theme.boxShadow(theme.color.lightGrey)};
`;

export const Rights = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: initial;
  margin: ${({ theme }) => theme.space.xs};
`;

const iconStyles = css`
  height: 40px;
  width: 40px;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  ${iconStyles}
`;

export const GithubIcon = styled(FaGithub)`
  ${iconStyles}
`;
