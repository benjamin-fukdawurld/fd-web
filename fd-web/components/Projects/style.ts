import styled from "styled-components";

import GlassSurface from "../utils/GlassSurface";

const Container = styled.section`
  position: relative;
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #0e0a0f 70%, #0e0a0f 100%);
  padding: 4rem 0;

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
  width: 40%;
  min-width: 280px;
  min-height: 300px;
  border-radius: 1rem;
  margin: 0 auto 4rem;
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

export { Container, ProjectCard };
