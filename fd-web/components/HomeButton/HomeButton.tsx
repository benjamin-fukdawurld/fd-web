import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ButtonProps } from "../../glass-ui/Button/interfaces";
import { StyledHomeButton, HomeButtonContainer } from "./style";

export default function HomeButton(props: ButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const elm = containerRef.current;
    elm.addEventListener("mouseenter", () => {
      elm.classList.add("hover");
    });
    elm.addEventListener("mouseleave", () => {
      elm.classList.replace("hover", "not-hover");
    });
    elm.addEventListener("animationend", () => {
      elm.classList.remove("not-hover");
    });

    setLoaded(true);
  }, [loaded]);

  return (
    <HomeButtonContainer ref={containerRef} className="buttonContainer">
      <Link href="/" passHref>
        <StyledHomeButton forwardedAs="a" alt="en savoir plus sur Benjamin" {...props}>
          <div className="pictureOctogon">
            <div className="pictureContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
          </div>
          <h2 className="title">Accueil</h2>
        </StyledHomeButton>
      </Link>
    </HomeButtonContainer>
  );
}
