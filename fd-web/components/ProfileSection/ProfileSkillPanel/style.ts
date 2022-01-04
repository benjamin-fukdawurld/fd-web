import styled, { keyframes } from "styled-components";
import Surface, { SurfaceProps } from "../../../glass-ui/Surface";
import GlassSurface from "../../../glass-ui/GlassSurface";
import { ProfileSkillProps } from "./interfaces";

export const FormationBadgeContainer = styled(Surface)<SurfaceProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 12rem;
  font-size: 1rem;

  padding: 0.125rem 0.25rem;
  margin: 0.5rem;

  img {
    width: 4rem;
    object-fit: contain;
    margin-right: 0.5rem;
  }

  & div {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0.5rem;

    .title {
      font-size: 0.875rem;
    }

    .year {
      font-size: 0.75rem;
      align-self: flex-end;
    }
  }
`;

export const FormationContainer = styled(Surface)<SurfaceProps>`
  height: 50%;
  ul {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: space-evenly;
  }
`;

const gaugeAnim = keyframes`
  0% {
    transform-origin: left center;
    transform: scaleX(0);
  }

  100% {
    transform-origin: left center;
    transform: scaleX(1);
  }
`;

export const ProfileSkillValue = styled(Surface)<SurfaceProps & { visible: boolean }>`
  width: 100%;
  height: 2rem;
  box-shadow: 0 0 5px 4px rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  position: relative;
  border: solid 1px ${(props) => props.theme.palette.common.white.string()};

  &::before {
    content: "";

    position: absolute;
    border-radius: 1.2rem;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.palette.primary.main.alpha(0.8).string()} 0%,
      ${(props) => props.theme.palette.secondary.main.alpha(0.8).string()} 50%
    );

    filter: drop-shadow(0px 0px 1px ${(props) => props.theme.palette.common.white.string()});
    animation: ${gaugeAnim} 2s ease-out both ${(props) => (props.visible ? "running" : "paused")};
  }
`;

export const ProfileSkillContainer = styled(GlassSurface)<ProfileSkillProps>`
  width: 100%;
  height: 2.5rem;

  display: grid;
  grid-template-columns: 5fr 7fr;

  * {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  ${ProfileSkillValue} {
    &::before {
      width: ${(props) => props.value}%;
    }
  }
`;
