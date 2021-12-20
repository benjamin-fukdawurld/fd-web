import styled, { keyframes } from "styled-components";
import Surface, { SurfaceProps } from "../../../glass-ui/Surface";

const cloudAnim = (index: number, count: number) => keyframes`
  0% {
    transform: translateX(-${100 * index}%)
  }

  100% {
    transform: translateX(${100 * (count - index - 1)}%)
  }
`;

const CloudContainer = styled(Surface)<SurfaceProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  .clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    .image {
      position: absolute;
      top: 0;
      left: 0;
      background: ${(props) => props.theme.palette.primary.dark.alpha(0.4).string()};
      background-size: contain;
      background-repeat: no-repeat;
      -webkit-mask-image: url("images/cloud_sm.webp");
      mask-image: url("images/cloud_sm.webp");

      width: 940px;
      height: 100%;

      @media (min-width: 768px) {
        -webkit-mask-image: url("images/cloud.webp");
        mask-image: url("images/cloud.webp");

        width: 1563px;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: ${(props) => props.theme.palette.secondary.light.string()};
        background-size: contain;
        background-repeat: no-repeat;
        -webkit-mask-image: url("images/cloud_bg_sm.webp");
        mask-image: url("images/cloud_bg_sm.webp");

        width: 940px;
        height: 100%;

        @media (min-width: 768px) {
          -webkit-mask-image: url("images/cloud_bg.webp");
          mask-image: url("images/cloud_bg.webp");

          width: 1563px;
        }
      }
    }

    .image:nth-of-type(1) {
      animation: ${cloudAnim} 36s linear infinite both;
    }

    .image:nth-of-type(2) {
      animation: ${cloudAnim} 36s 12s linear infinite both;
    }

    .image:nth-of-type(3) {
      animation: ${cloudAnim} 36s 24s linear infinite both;
    }
  }
`;

export { CloudContainer };
