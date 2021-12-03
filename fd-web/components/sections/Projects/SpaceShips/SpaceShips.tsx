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
  h: number;
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
  const delay = 0.5 + Math.random();

  return (
    <SpaceShipRow w="100%" h={`${props.h}px`}>
      {[...Array(Math.floor(Math.random() * 3 + 1))].map(() => (
        <SpaceShip
          key={`${type}-${mirrored}-size-${Math.floor(Math.random() * 10001)}`}
          type={type}
          x={size * (!mirrored ? -1 : 1)}
          y={props.offsetY + Math.random() * (props.yDelta ?? size)}
          width={size}
          height={size}
          speed={speed + addDelta(props.speedDelta ?? 0.125)}
          delay={delay + addDelta(props.delayDelta ?? 0.5)}
          mirrored={mirrored}
        />
      ))}
    </SpaceShipRow>
  );
}

export default function SpaceShips() {
  const [ships, setShips] = useState<SpaceShipsGeneratorOptions[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !ref.current.offsetHeight) {
      return;
    }

    setContainerHeight(ref.current.offsetHeight);
    const rowHeight = 256;
    const rowCount = Math.floor(containerHeight / rowHeight);

    setShips(
      [...Array(rowCount)].map((undefined, index: number) => ({
        h: 256,
        offsetY: 0,
        yDelta: 512,
        delay: Math.random() * 1.5,
        speedDelta: 0.8,
      }))
    );
  }, [containerHeight]);

  return (
    <SpaceShipsContainer
      ref={ref}
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
            console.log(current.className);
            (current as HTMLElement).style.animationPlayState = "running";
            current.addEventListener("animationend", () => {
              (current as HTMLElement).style.animationPlayState = "paused";
            });

            spaceship = spaceship.nextElementSibling;
          }
        }
      }}
    >
      {ships.map((shipProps: SpaceShipsGeneratorOptions, index: number) => (
        <SpaceShipsGenerator key={index} {...shipProps} />
      ))}
    </SpaceShipsContainer>
  );
}
