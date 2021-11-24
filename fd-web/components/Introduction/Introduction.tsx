import WaterDrops from "../utils/WaterDrops";
import Background from "../utils/BackgroundImage";
import IntroductionCard from "./IntroductionCard";

import { Container } from "./style";
import { IntroductionProps } from "./interfaces";
import SolarSystemComponent from "../SolarSystemComponent";

export default function Introduction(props: IntroductionProps) {
  return (
    <Container>
      <SolarSystemComponent />
      <IntroductionCard {...props.cardProps} />
    </Container>
  );
}
