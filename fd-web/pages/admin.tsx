import SolarSystemComponent from "../components/sections/Landing/SolarSystemComponent";
import Page from "../components/utils/Page";

import styled, { keyframes } from "styled-components";

import Image from "next/image";

import CloudBanner from "../components/CloudBanner/CloudBanner";

import { CloudProps } from "../components/CloudBanner/interfaces";

export const Clouds = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const cloudAnim2 = (index: number, count: number) => keyframes`
  0% {
    transform: translateX(-${100 * index}%)
  }

  100% {
    transform: translateX(${100 * (count - index - 1)}%)
  }
`;

const CloudDiv_ = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(0px) invert(1%) brightness(40%) contrast(200%) opacity(75%);
`;

const CloudImage = styled.img<CloudProps>`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${({ index, count }: CloudProps) => cloudAnim2(index, count)} 25s linear infinite both;
  max-width: inherit;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export function Cloud() {
  return (
    <CloudDiv_>
      <CloudImage src={`/images/cloud_.png`} alt={`cloud image`} index={0} count={2} />
      <CloudImage src={`/images/cloud_.png`} alt={`cloud image`} index={1} count={2} />
    </CloudDiv_>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Banner = styled.div`
  position: absolute;
  height: 30vh;
  width: 100%;
  bottom: 0;
`;

export const BannerTitle = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 4rem;

  @media (min-width: 400px) and (max-width: 607px) {
    font-size: 5rem;
  }

  @media (min-width: 608px) {
    font-size: 6rem;
  }

  color: transparent;
  background-color: rgba(255, 255, 255, 0.3);
  background-clip: text;
  -webkit-background-clip: text;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Tmp = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Admin(props: any) {
  return (
    <Page
      title="Tableau de bord - Fanatik Development"
      description="Indicateurs et gestion de contenu de FD"
    >
      <Container>
        <SolarSystemComponent />
        <CloudBanner>Projects</CloudBanner>
      </Container>
      <Tmp />
    </Page>
  );
}
