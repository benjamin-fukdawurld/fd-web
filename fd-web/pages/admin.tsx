import SolarSystemComponent from "../components/SolarSystemComponent";
import Page from "../components/utils/Page";

import styled, { keyframes } from "styled-components";

import Image from "next/image";

//<a href='https://www.freepik.com/vectors/light'>Light vector created by upklyak - www.freepik.com</a>
interface CloudProps {
  imgIndex: number;
  index: number;
}

const cloudAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }

  10% {
    opacity: 0.75;
    transform: translateX(-30%);
  }

  25% {
    opacity: 1;
    transform: translateX(0%);
  }

  75% {
    opacity: 1;
    transform: translateX(100%);
  }

  100% {
    opacity: 0;
    transform: translateX(150%);
  }
`;

const Clouds = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const CloudDiv = styled.div<CloudProps>`
  position: absolute;
  top: 0;
  max-width: 100%;
  height: 30vh;
  animation: ${cloudAnim} calc(5s * ${(props: CloudProps) => Math.log10(props.imgIndex * 500)})
    calc(1s * ${(props: CloudProps) => props.index}) both linear infinite;

  img {
    filter: blur(0px) invert(1%) brightness(40%) contrast(200%) opacity(75%);
  }
`;

function Cloud(props: CloudProps) {
  return (
    <CloudDiv {...props}>
      <img src={`/images/cloud${props.imgIndex}.png`} alt={`cloud image ${props.index}`} />
    </CloudDiv>
  );
}

const Banner = styled.div`
  height: 30vh;
  width: 100%;
`;

export default function Admin(props: any) {
  return (
    <Page
      title="Tableau de bord - Fanatik Development"
      description="Indicateurs et gestion de contenu de FD"
    >
      <Container>
        <SolarSystemComponent />
      </Container>

      <Clouds>
        <Cloud imgIndex={1} index={1} />
        <Cloud imgIndex={2} index={2} />
        <Cloud imgIndex={3} index={3} />
        <Cloud imgIndex={4} index={4} />
        <Cloud imgIndex={5} index={5} />
        <Cloud imgIndex={1} index={10} />
        <Cloud imgIndex={2} index={9} />
        <Cloud imgIndex={3} index={8} />
        <Cloud imgIndex={4} index={7} />
        <Cloud imgIndex={5} index={6} />
      </Clouds>
      <Banner></Banner>
    </Page>
  );
}
