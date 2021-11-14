export interface SpaceShipContainerProps {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  delay?: number;
  mirrored?: boolean;
}

export type SpaceShipType = 1 | 2 | 3 | 4 | 5 | 6;

interface BaseSpaceShipProps {
  type: SpaceShipType;
}

export type SpaceShipProps = BaseSpaceShipProps & SpaceShipContainerProps;
