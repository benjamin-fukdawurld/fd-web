import { ReactNode } from "react";
import { GlassSurfaceProps } from "../../glass-ui/GlassSurface";

export interface JobSectionProps {
  children?: ReactNode;
  title: string;
  highlights: [string, string, string];
}

export interface IntroductionCardProps extends GlassSurfaceProps {
  visible: boolean;
}
