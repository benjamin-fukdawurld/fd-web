import React, { forwardRef, MouseEvent, useEffect, useRef } from "react";
import { ButtonProps } from "./interfaces";
import { ButtonContainer } from "./style";

import { useCombinedRefs } from "../../glass-ui/hooks";

const Button = forwardRef<HTMLElement | null, ButtonProps>(
  ({ forwardedAs, forwardedProps, ...props }: ButtonProps, ref): JSX.Element => {
    const innerRef = useRef<HTMLElement | null>(null);
    const combinedRefs = useCombinedRefs<HTMLElement | null>(ref, innerRef);
    useEffect(() => {
      if (!combinedRefs.current) {
        return;
      }

      combinedRefs.current.addEventListener("animationend", () =>
        combinedRefs.current!.classList.remove("active")
      );
    }, [combinedRefs]);

    return (
      <ButtonContainer
        ref={combinedRefs}
        forwardedAs={forwardedAs ?? "button"}
        forwardedProps={{
          ...forwardedProps,
        }}
        {...props}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          const elm = event.target as HTMLButtonElement;
          elm.classList.add("active");
        }}
      >
        <div className="button">
          <div className="childrenContainer">{props.children}</div>
        </div>
      </ButtonContainer>
    );
  }
);

Button.displayName = "Button";

export default Button;
