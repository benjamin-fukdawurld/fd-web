import styled, { keyframes } from "styled-components";
import GlassSurface from "../GlassSurface";
import { defaultProps } from "../GlassSurface/interfaces";

const HeaderContainer = styled(GlassSurface)`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
  display: flex;
  color: white;
`;

const LeftPanel = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const RightPanel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
`;

const textPopUpTop = keyframes`
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-12px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 8px rgba(0, 0, 0, 0.3);
  }
`;

const HomeLink = styled.div`
  & a {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const ProfileImage = styled.div`
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }
  overflow: hidden;
  position: relative;

  &::after {
    content: " ";
    position: absolute;
    border-radius: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scale(1.05);
  }
`;

export { HeaderContainer, LeftPanel, RightPanel, HomeLink, ProfileImage };
