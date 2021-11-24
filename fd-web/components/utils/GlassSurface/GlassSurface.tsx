import type { GlassSurfaceProps } from "./interfaces";
import { defaultProps } from "./interfaces";

import styled from "styled-components";

const GlassSurface = styled.div<GlassSurfaceProps>`
  ${(props: GlassSurfaceProps) => `
    position: relative;
    background-color: ${props.glassColor};
    backdrop-filter: saturate(${props.saturate ?? 100}%) brightness(${
    props.brightness ?? 100
  }%) contrast(${props.contrast ?? 100}%) hue-rotate(${props.hueRotate ?? 0}deg) blur(${
    props.blur
  }px);
    border: 1px outset ${props.borderColor};
  `}
`;

GlassSurface.defaultProps = defaultProps;

export default GlassSurface;
