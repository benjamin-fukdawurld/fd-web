import styled from "styled-components";
import { puffInCenter } from "../../styles/animations";

import GlassSurface from "../../utils/GlassSurface";

const Container = styled(GlassSurface)`
  width: 40%;
  min-width: 280px;
  padding: 2rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 auto 4rem;
  color: white;

  animation: ${puffInCenter} 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;

const Title = styled.h1`
  align-self: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-bottom: 3rem;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-bottom: 0.5rem;
`;

export { Container, Title, CenteredContainer, Paragraph };
