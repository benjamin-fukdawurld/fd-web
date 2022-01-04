import styled, { css } from "styled-components";
import GlassSurface, { GlassSurfaceProps } from "../GlassSurface";

const Card = styled(GlassSurface)<GlassSurfaceProps>`
  ${(props) => css`
    background: linear-gradient(
      -45deg,
      ${props.theme.palette.secondary.main.alpha(0.1).string()},
      ${props.theme.palette.primary.main.alpha(0.1).string()}
    );

    border-radius: 0.5rem;
    border: solid 0.5rem ${props.theme.palette.primary.main.alpha(0.15).string()};

    box-shadow: 0 5px 15px -4px ${props.theme.palette.common.white.alpha(0.1).string()};

    padding: 1rem;
    color: white;
    margin: 1rem;
  `}
`;

export default Card;
