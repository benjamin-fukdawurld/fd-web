import styled, { keyframes } from "styled-components";
import GlassSurface, { GlassSurfaceProps } from "../../glass-ui/GlassSurface";

import { LoaderParticleProps } from "./interfaces";

const particleAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(200px);
  }
`;

const morphingAnim = keyframes`
  0% {
    border-radius 30% 70% 70% 30% / 30% 30% 70% 70%
    box-shadow 15px 15px 50px rgba(0,0,0,0.2)
  }
  25% { 
    border-radius 58% 42% 75% 25% / 76% 46% 54% 24%
  }
  50% {
    border-radius 50% 50% 33% 67% / 55% 27% 73% 45%
    box-shadow -10px -5px 50px rgba(0,0,0,0.2)
  }
  75% {
    border-radius 33% 67% 58% 42% / 63% 68% 32% 37%		
  }
`;

const rotateAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const fadeAnim = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const LoaderParticle = styled.div<LoaderParticleProps>`
  position: absolute;
  left: 0;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: ${(props) => props.yOffset};
  background: blue;
  filter: blur(5px) contrast(1.2);
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${particleAnimation} 3s ${(props) => props.delay} linear both infinite,
    ${morphingAnim} 1.3s linear both infinite;
  z-index: -1;

  &::before {
    content: "";
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.15) 0%,
      ${(props) => props.theme.palette.secondary.light.string()} 25%,
      ${(props) => props.theme.palette.primary.light.string()} 45%,
      ${(props) => props.theme.palette.primary.main.string()} 75%,
      transparent 100%
    );
    border-radius: 100%;
    width: 100%;
    height: 100%;
    z-index: 20;

    animation: ${morphingAnim} 1.3s linear both infinite;
  }
`;

export const LoaderSection = styled(GlassSurface)<GlassSurfaceProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${(props) => props.theme.palette.primary.dark.alpha(0.5).string()};

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &.fade {
    animation: ${fadeAnim} 500ms both;
  }

  .caption {
    font-size: 1rem;
    font-weight: 900;
    color: ${(props) => props.theme.palette.common.white.string()};
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(-2px -2px 5px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(3px 1px 2px ${(props) => props.theme.palette.primary.main.string()});
  }

  .loader {
    position: relative;
    width: 300px;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    .loaderLeft,
    .loaderRight {
      position: absolute;

      width: 30%;
      height: 30%;
      border-radius: 1.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        background: black;
        border-radius: 100%;
        width: 60%;
        height: 60%;
        z-index: 20;
        box-shadow: 0 0 15px 4px white;
      }

      background-color: blue;
      filter: blur(5px) contrast(1.2);
    }

    .loaderLeft {
      left: 0;
      animation: ${rotateAnim} 2s linear both infinite reverse;
    }

    .loaderRight {
      right: 0;
      animation: ${rotateAnim} 1.7s linear both infinite;
    }
  }
`;
