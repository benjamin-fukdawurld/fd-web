import styled, { keyframes } from "styled-components";
import Surface, { SurfaceProps } from "../../glass-ui/Surface";
import Card, { CardProps } from "../../glass-ui/Card";

export const pulseAnim = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(0.975);
  }
  10% {
    transform: scale(0.95);
  }
  15% {
    transform: scale(1.0125);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.95);
  }
`;

export const entranceAnim = keyframes`
  0% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
`;

export const ProjectShortImageContainer = styled(Surface)<SurfaceProps>`
  position: absolute;
  width: fit-content;
  height: 100%;
  z-index: -1;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  img {
    border-radius: 0.25rem;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(
      2px 2px 5px ${(props) => props.theme.palette.primary.dark.darken(0.6).alpha(0.8).string()}
    );
    transition: transform 250ms linear;
  }
`;

export const ProjectShortDescriptionContainer = styled(Surface)<SurfaceProps>`
  position: relative;
  width: 100%;
  height: 50%;
  padding: 0.5rem;
  border-radius: 0.25rem;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.6);
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }

  .ProjectionShortDescription {
    font-size: 1.125rem;
    font-weight: 900;
    padding-bottom: 0.25rem;

    -webkit-background-clip: text;
    background-clip: text;

    filter: drop-shadow(-2px -2px 2px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(3px 1px 1px ${(props) => props.theme.palette.primary.main.string()});

    @media (min-width: 1200px) {
      font-size: 1.25rem;
    }
  }

  .ProjectionShortCompany {
    font-size: 1;
    font-weight: 700;
    padding-bottom: 0.25rem;

    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }

    -webkit-background-clip: text;
    background-clip: text;

    filter: drop-shadow(
        -2px -2px 1px ${(props) => props.theme.palette.secondary.light.alpha(0.8).string()}
      )
      drop-shadow(3px 1px 0px ${(props) => props.theme.palette.primary.light.alpha(0.8).string()});
  }

  .tags {
    display: flex;
    flex-flow: row wrap;
    font-size: 0.875rem;
    height: 2rem;

    overflow: hidden;

    -webkit-background-clip: text;
    background-clip: text;
    opacity: 1;
    transition: opacity 250ms ease-in-out;

    filter: drop-shadow(
        -2px -2px 1px ${(props) => props.theme.palette.secondary.light.alpha(0.8).string()}
      )
      drop-shadow(3px 1px 0px ${(props) => props.theme.palette.primary.light.alpha(0.8).string()});

    li {
      padding: 0.25rem 0.5rem;
      margin: 0.25rem;
      background: linear-gradient(
        -45deg,
        ${(props) => props.theme.palette.primary.main.alpha(0.5).string()} 0%,
        ${(props) => props.theme.palette.secondary.main.alpha(0.5).string()} 50%
      );
      border-radius: 1rem;
    }
  }
`;

export const ProjectShortSection = styled(Surface)<SurfaceProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 25%;
  position: relative;
  margin: 0 1rem;

  animation: ${entranceAnim} 0.7s ${(props) => Math.random() / 2}s
    cubic-bezier(0.47, 0, 0.745, 0.715) both;

  .backTic {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.palette.primary.dark.darken(0.3).alpha(0.5).string()} 0%,
      ${(props) => props.theme.palette.secondary.dark.darken(0.3).alpha(0.5).string()} 50%
    );
    border-radius: 0.5rem;
    box-shadow: 0 0 15px -4px ${(props) => props.theme.palette.primary.main.string()},
      0 0 5px -2px ${(props) => props.theme.palette.secondary.main.string()};

    animation: ${pulseAnim} ${(props) => Math.random() * 2 + 1.2}s infinite linear;
  }
`;

export const ProjectShortContainer = styled(Card)<CardProps>`
  min-width: 300px;
  width: 100%;
  height: 15rem;
  position: relative;
  perspective: 100rem;

  margin: 0.5rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -2;

    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.palette.primary.main.alpha(0.1).string()} 0%,
      ${(props) => props.theme.palette.secondary.main.alpha(0.1).string()} 50%
    );
  }

  &:hover {
    ${ProjectShortDescriptionContainer} {
      .tags {
        opacity: 0.1;
      }

      &::before {
        opacity: 0.1;
      }
    }

    ${ProjectShortImageContainer} img {
      z-index: 1;
      transform: scale(1.1);
      @media (min-width: 600px) {
        transform: scale(1.5);
      }
    }
  }
`;
