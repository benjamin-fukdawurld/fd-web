import { SizeName } from "../../styles/utils";
import { GlassSurfaceProps } from "../GlassSurface";

export type ButtonColor = "primary" | "secondary";
export type ButtonVariant = "text" | "outlined" | "contained";

export interface BaseButtonProps {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: SizeName;
  disabled?: boolean;
}

export type ButtonProps = BaseButtonProps & GlassSurfaceProps;
