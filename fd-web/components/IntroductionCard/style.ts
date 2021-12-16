import styled, { keyframes } from "styled-components";

import StyledCard, { CardProps } from "../../glass-ui/Card";
import GlassSurface from "../../glass-ui/GlassSurface";

import { IntroductionCardProps } from "./interfaces";

const pulseAnim = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(0.975);
  }
  10% {
    transform: scale(0.95);
  }
  15% {
    transform: scale(1.0125);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.95);
  }
`;

const entranceAnim = keyframes`
  0% {
    transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

const Card = styled(StyledCard)<CardProps>`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: fit-content;
    margin: 0;
    
    .heading {
      flex: grow: 1;
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;

      .jobTitle {
        font-size: 1.5rem;
        font-weight: 900;
        text-align: center;
      }

      .jobDescription {
        font-size: 1rem;
        font-weight: 700;
        margin: 1rem 0;
        padding: 0.2rem 0.5rem;
        text-align: center;

        box-shadow: 0 10px 5px -4px rgba(255, 255, 255, 0.05);

        @media (min-width: ${(props) => props.theme.breakpoints.min("sm")}px) {
          font-size: 1.25rem;
        }
      }
    }

    .jobSection {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      margin: 1.0rem;
      min-width: 300px
      width: 30%;
      
      box-shadow: 0 8px 8px -8px rgba(255, 255, 255, 0.05);

      h3 {
        font-size: 1.25rem;
        font-weight: 700;
      }

      ul {
        text-align: center;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25rem;
      }

      svg {
        border-radius: 0.5rem;
        width: 6rem;
        height: 6rem;
      }
    }
`;

const IntroductionCardContainer = styled(GlassSurface)<IntroductionCardProps>`
  position: relative;
  margin: 1rem 1rem 2rem;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.palette.secondary.main.darken(0.2).alpha(0.2).string()};
    box-shadow: 0 0 15px 0px ${(props) => props.theme.palette.secondary.dark.alpha(0.6).string()},
      0 0 20px 0px ${(props) => props.theme.palette.secondary.dark.darken(0.2).alpha(0.4).string()},
      0 0 25px 2px ${(props) => props.theme.palette.primary.main.alpha(0.2).string()};

    animation: ${pulseAnim} 1.2s infinite linear
      ${(props) => (props.visible ? "running" : "paused")};
  }

  animation: ${entranceAnim} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    ${(props) => (props.visible ? "running" : "paused")};
`;

export { Card, IntroductionCardContainer };
