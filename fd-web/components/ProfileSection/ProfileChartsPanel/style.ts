import styled from "styled-components";

import Card, { CardProps } from "../../../glass-ui/Card";

export const ProfilePanel = styled(Card)<CardProps>`
  min-width: 300px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
  margin: 0;

  @media (min-width: 992px) {
    grid-column: 9 / span 3;
  }

  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.palette.primary.main.alpha(0.2).string()} 0%,
    ${(props) => props.theme.palette.secondary.main.alpha(0.2).string()} 50%
  );

  h3 {
    font-size: 1.25rem;
    font-weight: 700;

    -webkit-background-clip: text;
    background-clip: text;

    filter: drop-shadow(-2px -2px 1px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(4px 3px 2px ${(props) => props.theme.palette.primary.main.string()});
  }

  ul {
    width: 100%;
    font-weight: 600;

    -webkit-background-clip: text;
    background-clip: text;

    filter: drop-shadow(-2px -2px 1px ${(props) => props.theme.palette.secondary.main.string()})
      drop-shadow(4px 3px 2px ${(props) => props.theme.palette.primary.main.string()});
  }

  .formations {
    width: 100%;
    margin-bottom: 2rem;

    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      li {
        min-width: 200px;
        width: 40%;
        height: 2rem;
        display: grid;
        grid-template-columns: 3fr 9fr;
        font-size: 1rem;

        padding: 0.125rem 0.25rem;
        margin: 0.5rem;

        img {
          width: 100%;
          object-fit: contain;
          margin-right: 0.5rem;
        }

        p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 0.5rem;
        }
      }
    }
  }

  .skills {
    ul {
      font-size: 1.125rem;
      li {
        margin: 2rem 0.5rem;
      }
    }
  }

  .charts {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template: 1fr 1fr / 1fr;
    grid-gap: 2rem;

    @media (min-width: 600px) and (max-width: 992px) {
      grid-template: 1fr / 1fr 1fr;
    }

    div {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      .chart {
        margin: auto;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 600px) {
          min-height: 10rem;
        }

        @media (min-width: 992px) {
          max-width: 20vw;
        }
      }
    }
  }
`;
