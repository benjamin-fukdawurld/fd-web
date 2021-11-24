import styled, { keyframes } from "styled-components";
import IntersectionZone from "../IntersectionZone";

import { StarsProps } from "./interfaces";

const animStars = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2000px);
  }
`;

const StarsDiv = styled.div<StarsProps>`
  width: ${(props: StarsProps) => `${props.width}px`};
  height: ${(props: StarsProps) => `${props.height}px`};
  background: transparent;
  animation: ${animStars} ${(props: StarsProps) =>
  `${props.animationDuration}s`} linear infinite paused;
  filter: blur(1px);
  box-shadow: ${({ shadow }: StarsProps) => shadow}

  &::after {
    content: "";
    position: absolute;
    top: 2000px;
    width: ${(props: StarsProps) => `${props.width}px`};
    height: ${(props: StarsProps) => `${props.height}px`};
    background: transparent;
    box-shadow: ${({ shadow }: StarsProps) => shadow}
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export { StarsDiv, Container };
