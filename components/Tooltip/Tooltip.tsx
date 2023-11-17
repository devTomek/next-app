"use client";

import { roboto } from "@/lib/fonts";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { TextWrapper } from "./Tooltip.styled";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content sideOffset={5}>
            <TextWrapper className={roboto.className}>{text}</TextWrapper>
            <RadixTooltip.Arrow />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
