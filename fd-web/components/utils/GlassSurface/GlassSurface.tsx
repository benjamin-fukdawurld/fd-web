import type { GlassSurfaceProps } from "./interfaces";
import { defaultProps } from "./interfaces";

import styled from "styled-components";

const GlassSurface = styled.div<any & GlassSurfaceProps>`
  ${(props) => `
    position: relative;
    background-color: ${props.glassColor};
    backdrop-filter: saturate(80%) blur(${props.blur}px);
    border: 1px outset ${props.borderColor};
  `}
`;

GlassSurface.defaultProps = defaultProps;

export default GlassSurface;
