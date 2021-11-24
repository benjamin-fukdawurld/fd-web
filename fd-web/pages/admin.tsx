import SolarSystemComponent from "../components/SolarSystemComponent";
import Page from "../components/utils/Page";

export default function Admin(props: any) {
  return (
    <Page
      title="Tableau de bord - Fanatik Development"
      description="Indicateurs et gestion de contenu de FD"
    >
      <SolarSystemComponent />
    </Page>
  );
}
