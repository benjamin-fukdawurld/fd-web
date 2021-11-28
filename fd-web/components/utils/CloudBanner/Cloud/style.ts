import styled, { keyframes } from "styled-components";

import { cloudImageDefaultProps, CloudImageProps } from "./interfaces";

const cloudAnim = (index: number, count: number) => keyframes`
  0% {
    transform: translateX(-${100 * index}%)
  }

  100% {
    transform: translateX(${100 * (count - index - 1)}%)
  }
`;

const Clouds = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const CloudDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CloudImage = styled.img<CloudImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  filter: ${({ blur, invert, brightness, contrast, opacity }: CloudImageProps) =>
    `blur(${blur}px) invert(${invert}%) brightness(${brightness}%) contrast(${contrast}%) opacity(${opacity}%)`};
  animation: ${({ index, count }: CloudImageProps) => cloudAnim(index, count)} 25s linear infinite
    both;
  max-width: inherit;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
`;

CloudImage.defaultProps = cloudImageDefaultProps;

export { CloudDiv, CloudImage, Clouds };
