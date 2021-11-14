import { Container, Title, CenteredContainer, Paragraph } from "./style";
import type { IntroductionCardProps } from "./interfaces";

import Picture from "../Picture";

export default function IntroductionCard(props: IntroductionCardProps) {
  return (
    <Container glassColor={"rgba(255, 255, 255, 0.1)"}>
      <CenteredContainer>
        <Picture src={props.picture} />
      </CenteredContainer>
      <Title>{props.title}</Title>
      {props.paragraphs?.map((p, index) => (
        <Paragraph key={index}>{p}</Paragraph>
      ))}
    </Container>
  );
}
