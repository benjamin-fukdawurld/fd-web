import { GlassSurfaceProps } from "../../../glass-ui/GlassSurface";

export type GradeType = "bac+2" | "bac+3" | "bac+5";

export interface FormationBadgeProps {
  grade: GradeType;
  short: string;
  long: string;
  year: string;
}

export interface ProfileSkillProps extends GlassSurfaceProps {
  name: string;
  value: number;
}
