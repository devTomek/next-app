import { ComponentPropsWithoutRef } from "react";
import { Wrapper } from "./Button.styled";

export default function Button({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
