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

async function fetchData(retry?: number): Promise<any> {
  const introductionRef = FireStoreApi.doc(
    backendApi.database,
    "introduction/EuXSqy14wJMWZbk0osOa"
  );

  let i = 0;
  do {
    try {
      const introductionUnsubscribe = await getDoc(introductionRef);
      const cardProps = introductionUnsubscribe.data() as IntroductionCardProps;

      const projectsQuery = FireStoreApi.query(
        FireStoreApi.collection(backendApi.database, "projects")
      );
      let projects: ProjectProps[] = [];
      const docs = await getDocs(projectsQuery);
      docs.forEach((project) => {
        projects.push(project.data() as ProjectProps);
      });

      return {
        introduction: {
          cardProps,
        },
        projects,
      };
    } catch (error) {
      ++i;
      console.log(`retry: ${i}/${retry ?? "NaN"}`);
      if (!retry || i >= retry) {
        throw error;
      }
    }
  } while (true);
}

export async function getStaticProps(): Promise<IndexPageProps> {
  return {
    props: await fetchData(10),
  };
}
