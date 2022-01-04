import styled, { useTheme } from "styled-components";
import BaseSection, { SectionProps } from "../../glass-ui/Section";
import Card, { CardProps } from "../../glass-ui/Card";

import ProfileSkillPanel from "./ProfileSkillPanel";
import ProfileChartsPanel from "./ProfileChartsPanel";

const Section = styled(BaseSection)<SectionProps>`
  position: relative;
  transform-style: preserve-3d;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 992px) {
    grid-template-columns: repeat(11, 1fr);
  }

  grid-gap: 2rem;

  padding: 6rem 0.5rem 4rem;
`;

export default function ProfileSection(props: any) {
  const theme = useTheme();
  return (
    <Section>
      <ProfileSkillPanel />
      <ProfileChartsPanel />
    </Section>
  );
}
