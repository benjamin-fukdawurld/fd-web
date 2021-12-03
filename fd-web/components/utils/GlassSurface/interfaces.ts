interface BaseGlassSurfaceProps {
  as?: string | React.ComponentType<any>;
  glassColor?: string;
  borderColor?: string;
  blur?: number;
  saturate?: number;
  brightness?: number;
  contrast?: number;
  hueRotate?: number;
}

const defaultProps = {
  as: "div",
  glassColor: "rgba(255, 255, 255, 0.2)",
  borderColor: "rgba(255, 255, 255, 1)",
  blur: 10,
};

export type GlassSurfaceProps = BaseGlassSurfaceProps & typeof defaultProps;

export { defaultProps };
