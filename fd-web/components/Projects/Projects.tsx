import Image from "next/image";
import { useRef } from "react";

import styled, { keyframes } from "styled-components";

import { Container, ProjectCard } from "./style";

import Stars from "../utils/Stars";
import SpaceShips from "../SpaceShips";

const Picture = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  height: 50%;
  overflow: hidden;
  border: 5px solid rgba(0, 0, 255, 0.3);
  border-radius: 1rem;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  border-bottom: 5px solid rgba(0, 0, 255, 0.3);
  opacity: 0.6;

  box-shadow: 0px 20px 25px -5px rgba(0, 0, 255, 0.5);
`;

const Title = styled.h2`
  padding-top: 2rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const TextContainer = styled.div`
  padding: 1rem 1rem 2rem;
`;

const Paragraph = styled.p``;

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
        <Image src={picture} layout="fill" objectFit="cover" alt="mics pproject image" />
      </Picture>
      <Title>{title}</Title>
      <TextContainer>
        {paragraphs.map((p, index) => (
          <Paragraph key={index}>{p}</Paragraph>
        ))}
      </TextContainer>
    </ProjectCard>
  );
}

export default function Projects(props: { projects: ProjectProps[] }) {
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
    </Container>
  );
}
