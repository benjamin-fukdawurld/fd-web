import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  position: absolute;
  height: 20vh;

  width: 100%;
  top: -10vh;

  background: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(10px) saturate(120%);

  @media (min-width: 768px) {
    height: 24vh;
    top: -12vh;
  }
`;

const BannerTitle = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3rem;

  @media (min-width: 400px) and (max-width: 607px) {
    font-size: 4rem;
  }

  @media (min-width: 608px) {
    font-size: 5rem;
  }

  color: transparent;
  background-color: rgba(196, 196, 196, 0.9);
  background-clip: text;
  -webkit-background-clip: text;
`;

export { BannerContainer, Banner, BannerTitle };
