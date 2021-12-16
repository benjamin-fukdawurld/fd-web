import Page from "../components/Page";
import LandingSection from "../components/LandingSection";
import ProjectSection from "../components/ProjectSection";

import SolarSystemComponent from "../components/SolarSystemComponent";

export default function Home(props: any) {
  return (
    <Page
      title="Tableau de bord - Fanatik Development"
      description="Indicateurs et gestion de contenu de FD"
    >
      <SolarSystemComponent />
      <LandingSection />
      <ProjectSection />
    </Page>
  );
}
