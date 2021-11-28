import { ReactNode } from "react";

interface BaseCloudImageProps {
  index: number;
  count: number;
}

export interface CloudProps {
  blur?: number;
  invert?: number;
  brightness?: number;
  contrast?: number;
  opacity?: number;
}

const cloudImageDefaultProps = {
  blur: 0,
  invert: 0,
  brightness: 100,
  contrast: 100,
  opacity: 100,
};

export type CloudImageProps = BaseCloudImageProps & CloudProps & typeof cloudImageDefaultProps;
export { cloudImageDefaultProps };
