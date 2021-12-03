import { Container, Title, CenteredContainer, Paragraph, CardContainer } from "./style";
import type { IntroductionCardProps } from "./interfaces";

import Picture from "../Picture";

import ReactMarkdown from "react-markdown";

import styled, { keyframes } from "styled-components";

const JobTitleContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-bottom: 1rem;
`;

const JobTitle = styled.h2`
  color: white;
  font-weight: 900;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;
`;

const JobSubtitle = styled.h3`
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  width: 100%;
  flex-grow: 1;
  text-align: center;
`;

const JobSection = styled.div`
  width: 30%;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 0.5rem;
  box-shadow: 0 10px 10px -11px rgb(255 255 255 / 20%);
  margin-bottom: 0.5rem;

  svg {
    width: 30%;
    height: 30%;
  }

  h3 {
    font-weight: 900;
    font-size: 1.125rem;
  }

  ul {
    text-align: center;

    li {
      font-weight: 700;
      font-size: 0.875rem;
    }
  }
`;

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

const heartbeat = keyframes`
  from {
    transform: scale(1);
    transform-origin: center bottom;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.99);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.93);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  52% {
    transform: scale(1.05);
    animation-timing-function: ease-in;
  }
  58% {
    transform: scale(1.01);
    animation-timing-function: ease-out;
  }
  65% {
    transform: scale(1.07);
    animation-timing-function: ease-in;
  }
  71% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const CardTip = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  background-color: rgba(48, 0, 96, 0.5);
  box-shadow: 0 0 50px 5px rgba(72, 0, 128, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  animation: ${heartbeat} 1.5s ease-in-out infinite both;
`;

export function IntroductionCard2(props: any) {
  return (
    <CardContainer glassColor="rgba(0, 0, 255, 0.15)" borderColor="rgba(0, 0, 255, 0.05)">
      <CardTip />
      <JobTitleContainer>
        <JobTitle>Ingénieur Fullstack</JobTitle>
        <JobSubtitle>Node 🚀 React 🚀 Typescript </JobSubtitle>
      </JobTitleContainer>
      <JobSection>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h3>Front end</h3>
        <ul>
          <li>React, hooks, Next.js</li>
          <li>Tailwind, SASS, Material UI</li>
          <li>HTML, CSS, Javascript, Typescript</li>
        </ul>
      </JobSection>
      <JobSection>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
        <h3>Back end</h3>
        <ul>
          <li>Node.js, Express.js, Typescript</li>
          <li>Mongo DB, PostgreSQL, MySQL</li>
          <li>Git, Docker, Jest</li>
        </ul>
      </JobSection>
      <JobSection>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
        <h3>Applications</h3>
        <ul>
          <li>Electron.js, PWA, Qt</li>
          <li>C/C++, python, Javascript, Typescript</li>
          <li>Linux, Windows, Embedded systems</li>
        </ul>
      </JobSection>
    </CardContainer>
  );
}
