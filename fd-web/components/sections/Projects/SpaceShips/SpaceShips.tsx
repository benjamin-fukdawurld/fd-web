import { ReactNode, ForwardedRef } from "react";
import { useState, useEffect, useRef, forwardRef } from "react";

import { SpaceShipType } from "./interfaces";
import { SpaceShipsContainer } from "./style";

import SpaceShip from "./SpaceShip";
import styled from "styled-components";

interface SpaceShipRowProps {
  w: number | string;
  h: number | string;
  children?: ReactNode;
}

const SpaceShipRow = styled.div<SpaceShipRowProps>`
  position: relative;
  width: ${({ w }: SpaceShipRowProps) => w};
  height: ${({ h }: SpaceShipRowProps) => h};
`;

interface SpaceShipsGeneratorOptions {
  offsetY: number;
  delay?: number;
  yDelta?: number;
  speedDelta?: number;
  delayDelta?: number;
  rowRef?: ForwardedRef<HTMLDivElement>;
}

function SpaceShipsGenerator(props: SpaceShipsGeneratorOptions) {
  const addDelta = (delta: number) => Math.random() * 2 * delta - delta;

  const type = Math.floor(Math.random() * 6 + 1) as SpaceShipType;
  const mirrored = Math.random() > 0.5;
  const size = type === 1 ? 64 : 128;
  const speed = 1 + (Math.random() - 0.5);
  const delay = Math.random();

  return (
    <SpaceShipRow w="100%" h="10%">
      {[...Array(Math.floor(Math.random() * 5 + 1))].map(() => (
        <SpaceShip
          key={`${type}-${mirrored}-size-${Math.floor(Math.random() * 10001)}`}
          type={type}
          x={size * (!mirrored ? -1 : 1)}
          y={props.offsetY + Math.random() * (props.yDelta ?? size)}
          width={size}
          height={size}
          speed={speed + addDelta(props.speedDelta ?? 0.25)}
          delay={delay + addDelta(props.delayDelta ?? 0.25)}
          mirrored={mirrored}
        />
      ))}
    </SpaceShipRow>
  );
}

export default function SpaceShips() {
  const ships = [...Array(10)].map((undefined, index: number) => (
    <SpaceShipsGenerator
      key={index}
      offsetY={0}
      yDelta={512}
      delay={Math.random() * 1.5}
      speedDelta={0.8}
    />
  ));

  return (
    <SpaceShipsContainer
      root={null}
      threshold={0.5}
      onIntersection={(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        for (let entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          let spaceship = entry.target.firstElementChild;
          while (spaceship) {
            let current = spaceship;
            (current as HTMLElement).style.animationPlayState = "running";
            current.addEventListener("animationend", () => {
              (current as HTMLElement).style.animationPlayState = "paused";
            });

            spaceship = spaceship.nextElementSibling;
          }
        }
      }}
    >
      {ships}
    </SpaceShipsContainer>
  );
}
