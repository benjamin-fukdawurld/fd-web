import Page from "../components/utils/Page";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";

import { IntroductionProps } from "../components/Introduction/interfaces";
import { ProjectProps } from "../components/Projects/interfaces";

import backendApi from "../firebase/BackendApi";
import * as FireStoreApi from "firebase/firestore";
import { getDoc, getDocs } from "firebase/firestore";
import { IntroductionCardProps } from "../components/Introduction/IntroductionCard/interfaces";

export default function IntroductionPage(props: {
  introduction: IntroductionProps;
  projects: ProjectProps[];
}) {
  return (
    <Page
      title={"Benjamin ZAMOUR - Fanatik Development"}
      description={"Portflio de Benjamin ZAMOUR"}
    >
      <Introduction {...props.introduction} />
      <Projects projects={props.projects} />
    </Page>
  );
}

interface IndexPageProps {
  props: {
    introduction: IntroductionProps;
    projects: ProjectProps[];
  };
}

export async function getStaticProps(): Promise<IndexPageProps> {
  const introductionRef = FireStoreApi.doc(
    backendApi.database,
    "introduction/EuXSqy14wJMWZbk0osOa"
  );
  const introductionUnsubscribe = await getDoc(introductionRef);
  const cardProps = introductionUnsubscribe.data() as IntroductionCardProps;

  console.log(cardProps);

  const projectsQuery = FireStoreApi.query(
    FireStoreApi.collection(backendApi.database, "projects")
  );
  let projects: ProjectProps[] = [];
  (await getDocs(projectsQuery)).forEach((project) => {
    projects.push(project.data() as ProjectProps);
  });

  return {
    props: {
      introduction: {
        cardProps,
      },

      projects: [
        ...projects,
        ...projects,
        ...projects,
        ...projects,
        ...projects,
        ...projects,
        ...projects,
        ...projects,
        ...projects,
        ...projects,
      ],
    },
  };
}
