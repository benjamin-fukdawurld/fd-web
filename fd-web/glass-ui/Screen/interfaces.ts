import { SurfaceProps } from "../Surface";

export interface ScreenProps extends SurfaceProps {
  min?: boolean;
  max?: boolean;
  fixed?: boolean;
}

const defaultProps = {
  min: true,
};

export { defaultProps };
