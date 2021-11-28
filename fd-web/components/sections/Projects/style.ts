import styled from "styled-components";

import GlassSurface from "../../utils/GlassSurface";
import IntersectionZone from "../../utils/IntersectionZone";

const Container = styled(IntersectionZone)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #0e0a0f 70%, #0e0a0f 100%);
  padding: 8rem 0;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    top: -50px;
    height: 100px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(14, 10, 15, 1) 30%,
      rgba(14, 10, 15, 1) 80%,
      transparent 100%
    );
  }
`;

const ProjectCard = styled(GlassSurface)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 30%;
  min-width: 280px;
  min-height: 380px;
  border-radius: 1rem;
  margin: 2rem 1.66%;
  color: white;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.3) 10%,
      rgba(255, 255, 255, 0.35) 20%,
      rgba(255, 255, 255, 0.3) 30%,
      rgba(255, 255, 255, 0.15) 45%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.15) 70%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0) 80%
    );
    transform: scale(0);
    transform-origin: center;
    transition: transform 500ms ease-in-out;
  }

  &:hover::after {
    transform: scale(20);
  }
`;

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
  padding-bottom: 1rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const TextContainer = styled.div`
  padding: 0 1rem 2rem;
`;

const Paragraph = styled.p``;

export { Container, ProjectCard, Picture, Title, TextContainer, Paragraph };
