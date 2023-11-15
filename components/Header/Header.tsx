"use client";

import { useScrolledDown } from "@/hooks/useScrolledDown";
import yoda from "@/public/yoda.svg";
import Image from "next/image";
import { Wrapper } from "./Header.styled";

export default function Header() {
  const scrolledDown = useScrolledDown();

  return (
    <Wrapper $scrolledDown={scrolledDown}>
      <Image src={yoda} alt="header icon" width={100} height={75} />
    </Wrapper>
  );
}
