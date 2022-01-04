import styled, { css, keyframes } from "styled-components";

import Button from "../../glass-ui/Button";
import { ButtonProps } from "../../glass-ui/Button/interfaces";
import { SurfaceProps } from "../../glass-ui/Surface";

const PictureAnim = keyframes`
  0% {
    transform: translateX(150%) rotate(270deg);
  }

  100% {
    transform: translateX(15%) rotate(0deg);
  }
`;

const TitleAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const EnterAnim = keyframes`
0% {
  left: -10rem;
}
100% {
  left: 1rem;
}
`;

const StyledAboutButton = styled(Button)<ButtonProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  .pictureOctogon {
    position: absolute;
    width: 6rem;
    height: 6rem;
    left: 0;
    background: linear-gradient(
      -45deg,
      ${(props) =>
        `
      ${props.theme.palette.primary.main.darken(0.25).alpha(0.5).string()},
        ${props.theme.palette.secondary.main.lighten(0.15).alpha(0.2).string()}
      `}
    );

    animation: ${PictureAnim} 1200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) both;

    overflow: hidden;

    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

    img {
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .pictureContainer {
    position: relative;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
  }

  .title {
    position: absolute;
    left: 7rem;
    width: 50%;
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
    animation: ${TitleAnim} 1200ms 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
    text-align: center;
  }
`;

const BackTicAnim = keyframes`
  0% {
    transform: translateX(50%) scale(0.1) rotate(90deg);
  }
  100% {
    transform: translateX(0) scale(1) rotate(0);
  }
`;

const slideInBlurredRight = keyframes`
  0% {
    transform: translateX(50%) scaleX(0.1) scaleY(0.5);
    filter: blur(40px);
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    filter: blur(0);
  }
`;

const slideInBlurredRightRev = keyframes`
  0% {
    transform: translateX(50%) scaleX(0.1) scaleY(0.5);
    filter: blur(40px);
  }
  99%{
    transform: translateX(0) scaleY(0.99) scaleX(1);
    filter: blur(0);
  }

  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    filter: blur(0);
  }
`;

const AboutButtonContainer = styled.div<SurfaceProps>`
  ${(props) => css`
    position: absolute;
    max-width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 75%;
    height: 8rem;
    top: 2rem;

    animation: ${EnterAnim} 1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) both;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      filter: blur(2px);
      background: ${(props) =>
        `linear-gradient(-45deg, ${props.theme.palette.primary.main.string()} 50%, ${props.theme.palette.secondary.main.string()} 100%`});
      border-radius: 0.5rem;
      box-shadow: 0 0 25px 5px ${(props) => props.theme.palette.secondary.main.string()},
        0 0 25px 10px ${(props) => props.theme.palette.primary.main.string()};

      transform: translateX(50%) scaleX(0.1) scaleY(0.5);
    }

    &.hover::before {
      animation: ${slideInBlurredRight} 0.35s cubic-bezier(0.230, 1.000, 0.320, 1.000) both paused;
      animation-play-state: running;
    }
    &.not-hover::before {
      animation: ${slideInBlurredRightRev} 0.35s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse both paused;
      animation-play-state: running;
    }
  `}
`;

export { AboutButtonContainer, StyledAboutButton };
