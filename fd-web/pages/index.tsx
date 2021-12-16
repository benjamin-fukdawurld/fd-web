import styled, { keyframes } from "styled-components";
import Page from "../components/Page";
import GlassSurface, { GlassSurfaceProps } from "../glass-ui/GlassSurface";
import UiSurface, { SurfaceProps } from "../glass-ui/Surface";
import Section from "../glass-ui/Section";
import { SizeName } from "../styles/utils";
import LandingSection from "../components/LandingSection/LandingSection";

const Surface = styled(GlassSurface)<GlassSurfaceProps>`
  background-color: ${(props) => props.theme.palette.primary.main.alpha(0.05).string()};
  border: solid 5px ${(props) => props.theme.palette.primary.main.alpha(0.15).string()};
`;

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.palette.common.black.darken(0.25).string()};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function* randGen(): Generator<number, never, never> {
  while (1) {
    yield Math.random();
  }

  throw new Error("This must never happen");
}

const rand = randGen();

const glowAnim = () => keyframes`
  0% {
    transform: translate(${rand.next().value * 100}vw, ${rand.next().value * 100}vh) scale(${
  rand.next().value + 0.25
}, ${rand.next().value + 0.25}) rotate(${rand.next().value * 2 * 360 - 360}deg) skew(${
  rand.next().value * 2 * 15 - 15
}deg, ${rand.next().value * 2 * 15 - 15}deg);
  }
  
  ${Math.floor(rand.next().value * 10) + 20}% {
    transform: translate(${rand.next().value * 100}vw, ${rand.next().value * 100}vh) scale(${
  rand.next().value + 0.25
}, ${rand.next().value + 0.25}) rotate(${rand.next().value * 2 * 360 - 360}deg) skew(${
  rand.next().value * 2 * 15 - 15
}deg, ${rand.next().value * 2 * 15 - 15}deg);
  }

  ${Math.floor(rand.next().value * 10) + 40}% {
    transform: translate(${rand.next().value * 100}vw, ${rand.next().value * 100}vh) scale(${
  rand.next().value + 0.25
}, ${rand.next().value + 0.25}) rotate(${rand.next().value * 2 * 360 - 360}deg) skew(${
  rand.next().value * 2 * 15 - 15
}deg, ${rand.next().value * 2 * 15 - 15}deg);
  }

  ${Math.floor(rand.next().value * 10) + 60}% {
    transform: translate(${rand.next().value * 100}vw, ${rand.next().value * 100}vh) scale(${
  rand.next().value + 0.25
}, ${rand.next().value + 0.25}) rotate(${rand.next().value * 2 * 360 - 360}deg) skew(${
  rand.next().value * 2 * 15 - 15
}deg, ${rand.next().value * 2 * 15 - 15}deg);
  }

  ${Math.floor(rand.next().value * 10) + 80}% {
    transform: translate(${rand.next().value * 100}vw, ${rand.next().value * 100}vh) scale(${
  rand.next().value + 0.25
}, ${rand.next().value + 0.25}) rotate(${rand.next().value * 2 * 360 - 360}deg) skew(${
  rand.next().value * 2 * 15 - 15
}deg, ${rand.next().value * 2 * 15 - 15}deg);
  }

  100% {
    transform: translate(${rand.next().value * 100}vw, ${rand.next().value * 100}vh) scale(${
  rand.next().value + 0.25
}, ${rand.next().value + 0.25}) rotate(${rand.next().value * 2 * 360 - 360}deg) skew(${
  rand.next().value * 2 * 15 - 15
}deg, ${rand.next().value * 2 * 15 - 15}deg);
  }
`;

const Tip = styled(UiSurface)<SurfaceProps>`
  animation: ${(props) => glowAnim()} 5s linear alternate both infinite;
  background-color: ${(props) =>
    props.theme.palette.primary.main
      .rotate(rand.next().value * 90 - 45)
      .alpha(Math.random() / 2 + 0.2)
      .string()};
  border-radius: 100%;
  box-shadow: 0 0 75px 55px
      ${(props) => props.theme.palette.primary.dark.rotate(rand.next().value * 90 - 45).string()},
    0 0 55px 35px ${(props) => props.theme.palette.common.white.alpha(0.4).string()};
`;

export default function Home(props: any) {
  return (
    <Page
      title="Tableau de bord - Fanatik Development"
      description="Indicateurs et gestion de contenu de FD"
    >
      <LandingSection />
      <StyledSection position="relative" z={3}>
        {[...Array(10)].map((undefined, index) => (
          <Tip
            key={index}
            position="absolute"
            w="15rem"
            h="15rem"
            t="0"
            l="0"
            backdropFilter={[
              {
                name: "hue-rotate",
                value: rand.next().value * 360,
                unit: "deg",
              },
            ]}
          />
        ))}

        <Surface blurSize="lg" w="80rem" h="80rem" />
      </StyledSection>
    </Page>
  );
}
