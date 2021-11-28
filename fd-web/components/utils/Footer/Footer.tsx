import { FooterContainer } from "./style";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import styled from "styled-components";

const Link = styled.a`
  margin: 0.5rem;
`;

export default function Footer(props: any) {
  return (
    <FooterContainer
      as="footer"
      glassColor="rgba(255, 255, 255, 0.1)"
      borderColor="rgba(255, 255, 255, 0.05)"
      blur={10}
    >
      <Link target="_blank" href="https://github.com/benjamin-fukdawurld" title="GitHub">
        <GitHubIcon aria-label="github icon" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/benjamin-zamour-119925162/"
        title="LinkedIn"
      >
        <LinkedInIcon aria-label="LinkedIn icon" />
      </Link>
    </FooterContainer>
  );
}
