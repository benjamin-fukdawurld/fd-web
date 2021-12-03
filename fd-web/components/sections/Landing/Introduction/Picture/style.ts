import styled from "styled-components";
import GlassSurface from "../../../../utils/GlassSurface";

const PictureContainer = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

  & div {
      margin: 0.5rem auto 0!important;
      width: 90%;
      height: 90%;
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom 0;
    right: 0;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

const PictureCell = styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: span 10;

  @media (min-width: 520px) {
    grid-column-end: span 8;
  }

  @media (min-width: 768px) {
    grid-column-end: span 7;
  }

  @media (min-width: 992px) {
    grid-column-end: span 5;
  }

  @media (min-width: 1200px) {
    grid-column-end: span 3;
  }

  min-height: 8rem;
  height: 16.6vh;

  &::before {
    content: "";

    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 0, 128, 0.3);
    box-shadow: 0 0 50px 10px rgba(158, 0, 158, 0.6);
    border-radius: 10%;
    transform-origin: center;
    transform: translateX(50%) scale(0.1, 0.5);
    transition: 0.25s 150ms ease-in-out;
  }

  &:hover {
    &::before {
      transform: scale(0.9);
    }
  }
`;

const PictureContainer2 = styled(GlassSurface)`
  width: 100%;
  height: 100%;

  border-width: 5px;
  border-radius: 0.5rem;
  box-shadow: 10px 5px 40px 1px rgba(0, 0, 255, 0.35);
  overflow: hidden;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;

  transition: 0.25s ease-in-out;
  letter-spacing: 1px;

  @media (min-width: 420px) {
    padding: 1rem;
  }

  &:hover {
    letter-spacing: 3px;
    &::before {
      transform: skewX(45deg) translateX(200%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 255, 0.15), rgba(255, 255, 255, 0.05));
    transform: skewX(45deg) translateX(0);

    transition: 0.5s ease-in-out;
  }
`;

const PictureOctogon = styled.div`
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  background-color: rgba(0, 0, 255, 0.5);
  position: relative;
  width: 7rem;
  height: 7rem;
  margin: 0.5rem;

  & > * {
    top: 5% !important;
    left: 5% !important;
    width: 90% !important;
    height: 90% !important;
    img {
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    }
  }
`;

const Name = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 1.25rem;
  padding-left: 0.5rem;
  margin: auto;
  max-width: 50%;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
  }
`;

export { PictureContainer, PictureContainer2, PictureCell, PictureOctogon, Name };
