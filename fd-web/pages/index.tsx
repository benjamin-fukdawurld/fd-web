import Page from "../components/Page";
import LandingSection from "../components/LandingSection";
import ProjectSection from "../components/ProjectSection";
import ProfileSection from "../components/ProfileSection";

import SolarSystemComponent from "../components/SolarSystemComponent";
import CloudBanner from "../components/CloudBanner";
import { useRef, useState } from "react";

import Loader from "../components/Loader";

export default function Home(props: any) {
  const [sceneLoaded, setSceneLoaded] = useState<boolean>(false);
  const loaderRef = useRef<HTMLElement>(null);
  return (
    <Page
      title="Tableau de bord - Fanatik Development"
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
          <LandingSection />
          <CloudBanner title="Projets" />
          <ProjectSection />
          <CloudBanner title="Profil" />
          <ProfileSection />
        </>
      )}
    </Page>
  );
}
