import Page from "../components/Page";
import AboutSection from "../components/AboutSection";

import SolarSystemComponent from "../components/SolarSystemComponent";
import { useRef, useState } from "react";

import Loader from "../components/Loader";

export default function Home(props: any) {
  const [sceneLoaded, setSceneLoaded] = useState<boolean>(false);
  const loaderRef = useRef<HTMLElement>(null);

  return (
    <Page
      title="Benjamin Zamour - Ingénieur web full stack"
      description="Indicateurs et gestion de contenu de FD"
    >
      <SolarSystemComponent
        onLoaded={() => {
          setTimeout(() => setSceneLoaded(true), 1000);
          if (loaderRef.current) {
            loaderRef.current.classList.add("fade");
          }
        }}
      />
      {!sceneLoaded ? (
        <Loader ref={loaderRef} />
      ) : (
        <>
          <AboutSection />
        </>
      )}
    </Page>
  );
}
