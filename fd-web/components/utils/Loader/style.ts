import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
}
`;

const LoaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      position: absolute;
      border: 4px solid rgba(0, 0, 255, 0.7);
      opacity: 1;
      border-radius: 50%;
      animation: ${loaderAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

export { LoaderContainer };
