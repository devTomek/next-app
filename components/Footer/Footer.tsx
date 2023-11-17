import { githubRoute, linkedInRoute } from "@/lib/routes";
import {
  GithubIcon,
  LinkWrapper,
  LinkedInIcon,
  Rights,
  Wrapper,
} from "./Footer.styled";

export default function Footer() {
  return (
    <Wrapper>
      <Rights>&copy; Copyright 2023</Rights>

      <LinkWrapper href={linkedInRoute()} target="_black">
        <LinkedInIcon />
      </LinkWrapper>

      <LinkWrapper href={githubRoute()} target="_black">
        <GithubIcon />
      </LinkWrapper>
    </Wrapper>
  );
}
