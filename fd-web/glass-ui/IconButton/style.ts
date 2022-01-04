import styled from "styled-components";
import Surface from "../Surface";
import { IconButtonProps } from "./interfaces";

import { sizeNameToSize, backgroundGenerator } from "../Button";

export const IconButtonContainer = styled(Surface)<IconButtonProps>`
  width: ${(props) => sizeNameToSize(props.size ?? "md")};
  height: ${(props) => sizeNameToSize(props.size ?? "md")};
  border-style: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  filter: drop-shadow(
    0 5px 15px ${(props) => props.theme.palette.primary.light.alpha(0.6).string()}
  );

  .iconButton {
    position: relative;
    width: 100%;
    height: 100%;
    ${(props) => backgroundGenerator(props.color ?? "primary", props.theme)}
    ${(props) => (props.disabled ? "filter: grayscale(100%);" : "")}
    backdrop-filter: blur(16px);

    padding: 0;
    margin: 0;

    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      width: 120%;
      height: 120%;
      background: linear-gradient(
        to left,
        ${(props) =>
          `
      ${props.theme.palette.primary.light.alpha(0.1).string()},
      ${props.theme.palette.common.white.alpha(0.1).string()}
      `}
      );

      transform: translateX(-100%) skewX(-20deg);
      transition: transform 250ms ease-in-out;
    }

    &:hover::before {
      ${(props) => (props.disabled ? "" : "transform: translateX(15%) skewX(-13deg);")}
    }

    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

    img {
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    }

    .iconContainer {
      position: relative;
      width: 90%;
      height: 90%;
      top: 5%;
      left: 5%;
    }
  }
`;
