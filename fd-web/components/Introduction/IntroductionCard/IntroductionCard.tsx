import { Container, Title, CenteredContainer, Paragraph } from "./style";
import type { IntroductionCardProps } from "./interfaces";

import Picture from "../Picture";

import ReactMarkdown from "react-markdown";
import { ReactNode } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

export default function IntroductionCard(props: IntroductionCardProps) {
  return (
    <Container
      glassColor="rgba(50, 50, 255, 0.15)"
      borderColor="rgba(50, 50, 255, 0.15)"
      brightness={30}
      saturate={130}
      contrast={150}
    >
      <CenteredContainer>
        <Picture src={props.picture} />
      </CenteredContainer>
      <Title>{props.title}</Title>
      {props.paragraphs?.map((p, index) => (
        <ReactMarkdown
          key={index}
          components={{
            p({ children, ...props }) {
              return <Paragraph {...props}>{children}</Paragraph>;
            },
          }}
        >
          {p}
        </ReactMarkdown>
      ))}
    </Container>
  );
}
