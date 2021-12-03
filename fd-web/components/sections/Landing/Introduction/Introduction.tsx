import Link from "next/link";
import styled from "styled-components";
import GlassSurface from "../../../utils/GlassSurface";

import { Picture2 as Picture } from "./Picture";
import { IntroductionCard2 as IntroductionCard } from "./IntroductionCard";

const IntroductionContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: grid;
  grid-template: repeat(auto-fill, 12rem) / repeat(12, 1fr);
`;

const ContactButtonContainer = styled.a`
  position: relative;
  grid-row-start: 7;
  grid-column-start: 4;
  grid-column-end: span 6;

  @media (min-width: 768px) {
    grid-column-start: 5;
    grid-column-end: span 4;
  }

  @media (min-width: 1200px) {
    grid-column-start: 6;
    grid-column-end: span 2;
    grid-row-start: 4;
    grid-row-end: span 2;
  }

  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 4rem;

  .buttonTip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 1rem;
    background-color: rgba(96, 0, 96, 0.3);
    box-shadow: 0 0 50px 5px rgba(128, 0, 128, 0.5);

    transform-origin: center;
    transform: translateY(10%) scale(0.2, 1.2);
    transition: transform 500ms 150ms ease-in-out;
  }

  &:hover {
    .buttonTip {
      transform: translateY(0) scale(1, 1);
    }
  }
`;

const StyledContactButton = styled(GlassSurface)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border-width: 5px;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 255, 0.3);
  z-index: 1;
  letter-spacing: 1px;

  transition: 0.25s ease-in-out;

  &:hover {
    letter-spacing: 3px;

    &::before {
      transform: skewX(45deg) translateX(180%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10%;
    width: 60%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 255, 0.05), rgba(255, 255, 255, 0.05));
    transform: skewX(45deg) translateX(0);

    transition: 500ms ease-in-out;
  }
`;

function ContactButton(props: any) {
  return (
    <Link href="/contact" passHref>
      <ContactButtonContainer title="nous contacter">
        <div className="buttonTip" />
        <StyledContactButton glassColor="rgba(0,0,255,0.15)" borderColor="rgba(0, 0, 255, 0.2)">
          Contacter
        </StyledContactButton>
      </ContactButtonContainer>
    </Link>
  );
}

export default function Introduction(props: any) {
  return (
    <IntroductionContainer>
      <Picture>
        <Link href="/about" passHref></Link>
      </Picture>
      <IntroductionCard />
      <Link href="/contact" passHref>
        <ContactButton />
      </Link>
    </IntroductionContainer>
  );
}
