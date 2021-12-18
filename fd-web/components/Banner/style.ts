import styled from "styled-components";
import Surface, { SurfaceProps } from "../../glass-ui/Surface";

const BannerContainer = styled(Surface)<SurfaceProps>`
  position: relative;
  z-index: 1;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .banner {
    position: absolute;
    width: 100%;
    height: 150px;
    top: -75px;

    @media (min-width: 768px) {
      height: 250px;
      top: -125px;
    }
  }

  .bannerTitle {
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
    filter: drop-shadow(
        -2px -2px 0px ${(props) => props.theme.palette.secondary.dark.darken(0.25).string()}
      )
      drop-shadow(4px 4px 4px ${(props) => props.theme.palette.secondary.dark.darken(0.5).string()});
  }
`;

export { BannerContainer };
