import Link from "next/link";

import Button from "../../glass-ui/Button";

import { ContactButton as StyledButton } from "./style";

import { useTheme } from "styled-components";

export default function ContactButton() {
  const theme = useTheme();
  return (
    <StyledButton>
      <Link href="/contact" passHref>
        <Button forwardedAs="a" theme={theme}>
          Contact
        </Button>
      </Link>
    </StyledButton>
  );
}
