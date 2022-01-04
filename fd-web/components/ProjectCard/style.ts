import styled, { keyframes } from "styled-components";
import Tilt from "react-parallax-tilt";
import Card, { CardProps } from "../../glass-ui/Card";

export const ProjectImageContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 100rem;

  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.palette.primary.main.alpha(0.3).string()} 0%,
    ${(props) => props.theme.palette.secondary.main.alpha(0.3).string()} 50%
  );

  transform: translate3d(0, 0, 0);
  transition: 250ms ease-in-out;

  .imageContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 90%;
    border-radius: 0.5rem;
    perspective: 100rem;

    transform: translate3d(0, 0, 0);
    transition: 250ms ease-in-out;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }
`;

export const ProjectDescriptionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  transform: translateY(calc(400% - 8rem));

  @media (min-width: 768px) {
    transform: translateY(calc(400% - 6.125rem));
  }

  transition: transform 250ms ease-in-out;

  .descriptionContainer {
    position: absolute;
    width: 100%;
    padding-left: 0.25rem;
    -webkit-background-clip: text;
    background-clip: text;

    transition: backdrop-filter, transform 250ms ease-in-out;

    filter: drop-shadow(-2px -2px 0px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(2px 2px 3px ${(props) => props.theme.palette.primary.main.string()});

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 250ms linear;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0.5rem 0.25rem 0.25rem;
    }

    .subtitle {
      font-size: 1rem;
      font-weight: 600;
      padding: 0 0.25rem 0.25rem;

      @media (min-width: 600px) and (max-width: 991px) {
        opacity: 0;
        transform: scale(0);
        transition: transform, opacity 500ms ease-in-out;
      }
    }

    .description {
      opacity: 0;
      transform: scale(0);
      transition: transform, opacity 500ms ease-in-out;
      padding: 0.5rem 0.25rem;
    }

    .tags {
      display: flex;
      flex-flow: row wrap;
      padding-bottom: 0.5rem;

      opacity: 0;
      transform: scale(0);
      transition: transform, opacity 500ms ease-in-out;

      li {
        padding: 0.25rem 0.75rem;
        margin: 0.25rem;
        border-radius: 2rem;
        background: linear-gradient(
          -45deg,
          ${(props) => props.theme.palette.primary.main.string()} 0%,
          ${(props) => props.theme.palette.secondary.main.string()} 50%
        );
      }
    }
  }
`;

const pulseAnim = keyframes`
  0% {
    transform: scale(0.85);
  }
  5% {
    transform: scale(0.875);
  }
  10% {
    transform: scale(0.85);
  }
  15% {
    transform: scale(0.90);
  }
  50% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(0.85);
  }
`;

export const StyledTilt = styled(Tilt)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 40%;

  .backTic {
    position: absolute;
    width: 100%;
    height: 90%;
    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.palette.primary.dark.darken(0.8).alpha(0.5).string()} 0%,
      ${(props) => props.theme.palette.secondary.dark.darken(0.8).alpha(0.5).string()} 50%
    );
    box-shadow: 0 0 15px -4px ${(props) => props.theme.palette.primary.main.string()},
      0 0 5px -2px ${(props) => props.theme.palette.secondary.main.string()};

    animation: ${pulseAnim} 1.2s ${(props) => Math.random() / 2}s infinite linear;
  }
`;

export const ProjectCardContainer = styled(Card)<CardProps>`
  min-width: 300px;
  width: 100%;
  height: 20rem;
  position: relative;
  perspective: 100rem;
  overflow: hidden;

  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.palette.secondary.main.alpha(0.2).string()} 0%,
    ${(props) => props.theme.palette.primary.main.alpha(0.2).string()} 50%
  );

  &:hover {
    ${ProjectImageContainer} {
      transform: translate3d(0, 0, 5rem);
      .imageContainer {
        transform: translate3d(0, 0, 5rem);

        img {
          transform: translate3d(0, 0, 5rem);
        }
      }
    }

    ${ProjectDescriptionContainer} {
      transform: translateY(0);
      .descriptionContainer {
        &::before {
          opacity: 0.5;
        }

        .description,
        .tags {
          opacity: 1;
          transform: scale(1);
        }

        .subtitle {
          @media (min-width: 600px) and (max-width: 991px) {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
  }
`;
