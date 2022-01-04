import Button from "../../glass-ui/Button";

import { ContactButton as StyledButton } from "./style";

import { useTheme } from "styled-components";
import { forwardRef } from "react";

const ContactButton = forwardRef<HTMLElement, any>((props, ref) => {
  const theme = useTheme();
  return (
    <StyledButton ref={ref} {...props}>
      <Button forwardedAs="a" theme={theme} href="mailto:benjamin.zamour@gmail.com">
        Contact
      </Button>
    </StyledButton>
  );
});

ContactButton.displayName = "ContactButton";

export default ContactButton;
