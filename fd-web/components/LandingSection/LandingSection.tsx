import styled, { useTheme } from "styled-components";

import BaseSection, { SectionProps } from "../../glass-ui/Section";
import { useVisible } from "../../glass-ui/hooks";

import AboutButton from "../AboutButton";

import IntroductionCard from "../IntroductionCard";

import ContactButton from "../ContactButton";
import { useEffect, useRef } from "react";

const Section = styled(BaseSection)<SectionProps>`
  position: relative;

  perspective: 1000px;
  perspective-origin: center;
  transform-style: preserve-3d;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 10rem 0 6rem;
`;

export default function LandingSection() {
  const theme = useTheme();

  const [observe, visible] = useVisible({ threshold: 0.25, visible: true });
  const landingSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (landingSectionRef.current) {
      observe(landingSectionRef.current);
    }
  }, [observe, landingSectionRef]);

  return (
    <Section>
      <AboutButton blurSize={"sm"} theme={theme} />
      <IntroductionCard theme={theme} ref={landingSectionRef} visible={visible} />
      <ContactButton />
    </Section>
  );
}
