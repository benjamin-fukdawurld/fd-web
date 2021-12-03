import styled from "styled-components";
import { puffInCenter } from "../../../../styles/animations";

import GlassSurface from "../../../../utils/GlassSurface";
import { GlassSurfaceProps } from "../../../../utils/GlassSurface/interfaces";

const Container = styled(GlassSurface)<GlassSurfaceProps>`
  width: 80%;
  max-width: 680px;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 auto;

  animation: ${puffInCenter} 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;

const Title = styled.h1`
  align-self: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-bottom: 3rem;
  color: white;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  background: linear-gradient(90deg, #ccc, #ddd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const CardContainer = styled(GlassSurface)`
  grid-row-start: 2;
  grid-row-end: span 4;
  grid-column-start: 2;
  grid-column-end: span 10;

  @media (min-width: 768px) {
    grid-column-start: 4;
    grid-column-end: span 6;
    grid-row-end: span 4;
  }

  @media (min-width: 1200px) {
    grid-column-start: 5;
    grid-column-end: span 4;
    grid-row-end: span 2;
  }

  border-radius: 0.5rem;
  border-width: 5px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export { Container, Title, CenteredContainer, Paragraph, CardContainer };
