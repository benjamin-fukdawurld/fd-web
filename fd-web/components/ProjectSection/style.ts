import styled from "styled-components";
import BaseSection, { SectionProps } from "../../glass-ui/Section";

export const Section = styled(BaseSection)<SectionProps>`
  padding: 6rem 0 4rem;
  display: flex;
  algin-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  overflow: hidden;

  .projects {
    position: relative;
    transform-style: preserve-3d;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 4rem;

  .shorts {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    padding: 0.25rem 0.25rem 2rem;
  }
`;
