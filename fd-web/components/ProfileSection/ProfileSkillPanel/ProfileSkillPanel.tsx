import styled from "styled-components";

import Card, { CardProps } from "../../../glass-ui/Card";
import { ProfileSkills } from "./ProfileSkills";
import { ProfileFormation } from "./ProfileFormation";

const ProfilePanel = styled(Card)<CardProps>`
  min-width: 300px;
  height: 100%;
  width: 100%;
  min-height: 40rem;
  padding: 1rem;
  margin: 0;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 992px) {
    grid-column: 1 / span 3;
  }

  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.palette.primary.main.alpha(0.2).string()} 0%,
    ${(props) => props.theme.palette.secondary.main.alpha(0.2).string()} 50%
  );

  h3 {
    font-size: 1.25rem;
    font-weight: 700;

    -webkit-background-clip: text;
    background-clip: text;

    filter: drop-shadow(-2px -2px 1px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(4px 3px 2px ${(props) => props.theme.palette.primary.main.string()});
  }

  ul {
    width: 100%;
    font-weight: 600;

    -webkit-background-clip: text;
    background-clip: text;

    filter: drop-shadow(-2px -2px 1px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(4px 3px 2px ${(props) => props.theme.palette.primary.main.string()});
  }

  .skills {
    width: 100%;
    height: 50%;
    ul {
      font-size: 1.125rem;
      li {
        margin: 2rem 0.5rem;
      }
    }
  }

  .charts {
    height: 100%;

    display: grid;
    grid-template-rows: 1fr 1fr;

    div {
      width: 100%;
      height: 100%;
      .chart {
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default function ProfileSkillPanel() {
  return (
    <ProfilePanel>
      <ProfileFormation />
      <ProfileSkills />
    </ProfilePanel>
  );
}
