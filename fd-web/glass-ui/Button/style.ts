import styled, { css, keyframes } from "styled-components";
import GlassSurface from "../GlassSurface";

import { ButtonProps } from "./interfaces";
import ButtonStyleHelper from "./ButtonStyleHelper";

const ClickAnim = keyframes`
0% {
  transform: translateZ(0px);
}
100% {
  transform: translateZ(50px);
}
`;

const ButtonContainer = styled(GlassSurface)<ButtonProps>`
  ${(props) => {
    const helper = new ButtonStyleHelper(props);
    return css`
      position: relative;
      display: block;
      width: ${helper.width};
      height: ${helper.height};
      overflow: hidden;
      ${helper.background};
      ${props.disabled ? "filter: grayscale(100%);" : ""}
      ${helper.border}
      padding: ${helper.padding};
      box-shadow: 0 5px 20px -8px ${helper.theme.palette.common.white.alpha(0.1).string()};

      &.active {
        animation: ${ClickAnim} 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both alternate 2;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 120%;
        height: 120%;
        ${helper.overlayColor}

        transform: translateX(-75%) skewX(-30deg);
        transition: transform 250ms ease-in-out;
      }

      .button {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0.5rem;

        .childrenContainer {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: letter-spacing 200ms ease-in-out;

          ${helper.font}
        }
      }

      &:hover {
        &::after {
          transform: translateX(75%) skewX(-30deg);
        }
      }
    `;
  }}
`;

export { ButtonContainer };
