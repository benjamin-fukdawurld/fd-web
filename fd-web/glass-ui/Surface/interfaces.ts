import React, { ReactNode, RefObject } from "react";
import { DefaultTheme } from "styled-components";

import { FilterFunction } from "../../styles/utils";

export type PositionValues =
  | "absolute"
  | "relative"
  | "fixed"
  | "initial"
  | "inherit"
  | "revert"
  | "static"
  | "sticky";

export interface BaseSurfaceProps {
  children?: ReactNode;
  className?: string;
  theme?: DefaultTheme;

  filter?: FilterFunction[];
  backdropFilter?: FilterFunction[];

  position?: PositionValues;
  w?: string;
  h?: string;
  t?: string;
  b?: string;
  l?: string;
  r?: string;
  z?: number;

  m?: string;
  p?: string;
}

export interface SurfaceProps<P extends object = {}> extends BaseSurfaceProps {
  ref?: any;
  forwardedAs?: string | React.ElementType;
  forwardedProps?: P;
  theme: DefaultTheme;
}
