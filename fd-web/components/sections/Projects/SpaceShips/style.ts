import styled, { keyframes } from "styled-components";

import { SpaceShipContainerProps } from "./interfaces";

import IntersectionZone from "../../../utils/IntersectionZone";

const moveSpaceShipX = (direction: number) => {
  return keyframes`
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(calc(${direction > 0 ? `100vw  + 500px` : `-100vw - 500px`}), 0);
    }
  `;
};

const SpaceShipContainer = styled.div<SpaceShipContainerProps>`
  position: absolute;
  left: ${(props: SpaceShipContainerProps) =>
    props.x <= 0
      ? `${props.x - props.width / 2}px`
      : `calc(100vw + ${props.x - props.width / 2}px)`};
  top: ${(props: SpaceShipContainerProps) => props.y - props.height / 2}px;
  width: ${(props: SpaceShipContainerProps) => props.width}px;
  height: ${(props: SpaceShipContainerProps) => props.height}px;
  animation: ${(props: SpaceShipContainerProps) => moveSpaceShipX(props.mirrored ? -1 : 1)}
    ${(props: SpaceShipContainerProps) => 5 / props.speed}s
    ${(props: SpaceShipContainerProps) => (props.delay ? `${props.delay}s` : "")} ease-in;

  animation-play-state: paused;

  & > div {
    transform: scaleX(${(props: SpaceShipContainerProps) => (props.mirrored ? "1" : "-1")});
  }
`;

const SpaceShipsContainer = styled(IntersectionZone)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export { SpaceShipsContainer, SpaceShipContainer };
