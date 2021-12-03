import Image from "next/image";
import { SpaceShipContainer } from "./style";

import { SpaceShipProps } from "./interfaces";

export default function SpaceShip(props: SpaceShipProps) {
  return (
    <SpaceShipContainer
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      speed={props.speed}
      delay={props.delay}
      mirrored={props.mirrored}
    >
      <Image
        src={`/images/space-shooter/ship-utils/Ship${props.type}/Ship${props.type}.png`}
        width={props.width}
        height={props.height}
        alt="SpaceShip 1"
      />
    </SpaceShipContainer>
  );
}
