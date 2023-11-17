import { ReactNode } from "react";
import { Wrapper } from "./PageContainer.styled";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
