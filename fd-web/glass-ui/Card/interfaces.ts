import { ReactNode } from "react";
import { GlassSurfaceProps } from "../GlassSurface";
import { BaseSurfaceProps } from "../Surface";

export interface CardProps extends GlassSurfaceProps {
  containerProps?: BaseSurfaceProps;
  beforeNode?: ReactNode;
  afterNode?: ReactNode;
}
