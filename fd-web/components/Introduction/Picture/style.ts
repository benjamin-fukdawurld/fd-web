import styled from "styled-components";

const PictureContainer = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

  & div {
      margin: auto!important;
      width: 90%;
      height: 90%;
      margin: 0.2rem;
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

export { PictureContainer };
