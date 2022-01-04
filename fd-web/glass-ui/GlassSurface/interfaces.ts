import { SizeName } from "../../styles/utils";
import { SurfaceProps } from "../Surface";

export interface GlassSurfaceProps extends SurfaceProps {
  blurSize?: SizeName;
}

const defaultProps = {
  blurSize: "sm" as SizeName,
};

export { defaultProps };
