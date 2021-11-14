import WaterDrops from "../utils/WaterDrops";
import Background from "../utils/BackgroundImage";
import IntroductionCard from "./IntroductionCard";

import { Container } from "./style";
import { IntroductionProps } from "./interfaces";

export default function Introduction(props: IntroductionProps) {
  return (
    <Container>
      <Background>
        <WaterDrops />
      </Background>
      <IntroductionCard {...props.cardProps} />
    </Container>
  );
}
