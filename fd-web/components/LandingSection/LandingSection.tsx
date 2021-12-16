import styled, { useTheme } from "styled-components";

import BaseSection, { SectionProps } from "../../glass-ui/Section";

import AboutButton from "../AboutButton";

import IntroductionCard from "../IntroductionCard";

import ContactButton from "../ContactButton";

const Section = styled(BaseSection)<SectionProps>`
  position: relative;

  perspective: 1000rem;
  perspective-origin: center;
  transform-style: preserve-3d;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 10rem 0 6rem;
`;

export default function LandingSection() {
  const theme = useTheme();
  return (
    <Section>
      <AboutButton blurSize={"sm"} theme={theme} />
      <IntroductionCard />
      <ContactButton />
    </Section>
  );
}
