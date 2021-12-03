import { ReactNode, useState } from "react";

import { Container } from "./style";

import SolarSystemComponent from "./SolarSystemComponent";
import Introduction from "./Introduction/Introduction";
import IntroductionCard from "./Introduction/IntroductionCard";
import Loader from "../../utils/Loader";

import { IntroductionProps } from "./Introduction/interfaces";

interface LandingLoaderProps {
  children: ReactNode | ReactNode[];
}

function LandingLoader(props: LandingLoaderProps) {
  const [isReady, setReady] = useState<boolean>(false);
  return (
    <Container>
      <SolarSystemComponent
        onLoaded={() => {
          setReady(true);
        }}
      />
      {isReady ? props.children : <Loader />}
    </Container>
  );
}

export default function Landing(props: IntroductionProps) {
  return (
    <LandingLoader>
      <Introduction />
      {props.children}
    </LandingLoader>
  );
}
