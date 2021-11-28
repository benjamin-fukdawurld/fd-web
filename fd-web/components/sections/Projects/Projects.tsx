import Image from "next/image";
import { ReactNode, useRef } from "react";

import ReactMarkdown from "react-markdown";

import { Container, ProjectCard, Picture, Title, TextContainer, Paragraph } from "./style";

import Stars from "../../utils/Stars";
import SpaceShips from "./SpaceShips";

interface ProjectProps {
  picture: string;
  title: string;
  paragraphs: string[];
}

function Project({ picture, title, paragraphs }: ProjectProps) {
  return (
    <ProjectCard
      as={"article"}
      glassColor="rgba(0, 0, 255, 0.1)"
      borderColor="rgba(0, 0, 255, 0.15)"
      blur={3}
    >
      <Picture>
        <Image src={picture} layout="fill" objectFit="contain" alt="mics project image" />
      </Picture>
      <TextContainer>
        <Title>{title}</Title>
        {paragraphs.map((p, index) => (
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
      </TextContainer>
    </ProjectCard>
  );
}

export interface ProjectsProps {
  projects: ProjectProps[];
  children?: ReactNode;
}

export default function Projects(props: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <Container
      ref={ref}
      root={null}
      threshold={0.5}
      onIntersection={(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        for (let entry of entries) {
          if (!entry.isIntersecting && !entry.target.className.includes("StarsContainer")) {
            continue;
          }

          if (entry.intersectionRatio >= observer.thresholds[0]) {
            let current = entry.target.firstElementChild;
            while (current) {
              if (current.style) {
                current.style.animationPlayState = "running";
              }
              current = current.nextElementSibling;
            }
          }
        }
      }}
    >
      <Stars />
      <SpaceShips />
      {props.projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
      {props.children}
    </Container>
  );
}
