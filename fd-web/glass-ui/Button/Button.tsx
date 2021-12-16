import React, { MouseEvent, useEffect, useRef } from "react";
import { ButtonProps } from "./interfaces";
import { ButtonContainer } from "./style";

export default function Button({ forwardedAs, forwardedProps, ...props }: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.addEventListener("animationend", () => ref.current!.classList.remove("active"));
  }, [1]);

  return (
    <ButtonContainer
      forwardedAs={forwardedAs ?? "button"}
      forwardedProps={{
        ref,
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
