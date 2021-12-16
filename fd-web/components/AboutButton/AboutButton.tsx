import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ButtonProps } from "../../glass-ui/Button/interfaces";
import { StyledAboutButton, AboutButtonContainer } from "./style";

export default function AboutButton(props: ButtonProps) {
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
    <AboutButtonContainer ref={containerRef} className="buttonContainer">
      <Link href="/about" passHref>
        <StyledAboutButton forwardedAs="a" alt="en savoir plus sur Benjamin" {...props}>
          <div className="pictureOctogon">
            <div className="pictureContainer">
              <img src="/images/profile.webp" alt="ben" />
            </div>
          </div>
          <h1 className="title">Benjamin Zamour</h1>
        </StyledAboutButton>
      </Link>
    </AboutButtonContainer>
  );
}
