"use client";

import { useScrolledDown } from "@/hooks/useScrolledDown";
import { homeRoute } from "@/lib/routes";
import yoda from "@/public/yoda.svg";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./Header.styled";

export default function Header() {
  const scrolledDown = useScrolledDown();

  return (
    <Wrapper $scrolledDown={scrolledDown}>
      <Link href={homeRoute()}>
        <Image
          src={yoda}
          alt="header icon"
          width={100}
          height={75}
          sizes="10vw"
        />
      </Link>
    </Wrapper>
  );
}
