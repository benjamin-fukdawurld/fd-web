import Link from "next/link";

import Button from "../../glass-ui/Button";

import { ContactButton as StyledButton } from "./style";

import { useTheme } from "styled-components";
import { forwardRef } from "react";

const ContactButton = forwardRef<HTMLElement, any>((props, ref) => {
  const theme = useTheme();
  return (
    <StyledButton ref={ref} {...props}>
      <Link href="/contact" passHref>
        <Button forwardedAs="a" theme={theme}>
          Contact
        </Button>
      </Link>
    </StyledButton>
  );
});

ContactButton.displayName = "ContactButton";

export default ContactButton;
