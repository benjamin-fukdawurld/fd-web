import type { WaterDropProps } from "./interfaces";
import styled, { css } from "styled-components";
import { slideInBckCenter } from "../../styles/animations";

function radiusesGenerator() {
  const radiuses = [...Array(4)].map((undefined, index) => {
    const val = Math.floor(Math.random() * 21) + 40;
    return [val, 100 - val];
  });

  return (
    `${radiuses[0][0]}% ${radiuses[0][1]}% ${radiuses[1][0]}% ${radiuses[1][1]}%` +
    ` / ${radiuses[2][0]}% ${radiuses[3][0]}% ${radiuses[3][1]}% ${radiuses[2][1]}%`
  );
}

const Drop = styled.div<any & WaterDropProps>`
  ${(props: WaterDropProps) => css`
    width: ${props.size};
    height: ${props.size};
    border-radius: ${radiusesGenerator()};
    background: ${props.color};
    box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.1),
      15px 20px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(255, 255, 255, 0.4);
    position: absolute;
    top: ${props.pos.y}px;
    left: ${props.pos.x}px;
    animation: ${slideInBckCenter} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  `}
`;

interface ShininessProps {
  x: string;
  y: string;
  h: string;
  w: string;
}

const Shininess = styled.div<ShininessProps>`
  ${(props: ShininessProps) => css`
    position: absolute;
    top: ${props.y};
    left: ${props.x};
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 1) 0%,
      rgba(230, 230, 230, 1) 41%,
      rgba(133, 19, 133, 0) 81%,
      rgba(133, 19, 133, 0) 100%
    );
    height: ${props.h};
    width: ${props.w};
    border-radius: ${radiusesGenerator()};
  `}
`;

export { Drop, Shininess };
