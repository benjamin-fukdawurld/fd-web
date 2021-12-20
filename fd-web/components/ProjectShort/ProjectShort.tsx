import { ProjectCardProps } from "../ProjectCard";
import { ProjectShortDescription } from "./ProjectShortDescription";
import { ProjectShortImage } from "./ProjectShortImage";

import { ProjectShortSection, ProjectShortContainer } from "./style";

export default function ProjectShort({ image, description }: ProjectCardProps) {
  return (
    <ProjectShortSection>
      <div className="backTic" />
      <ProjectShortContainer className="ProjectShort">
        <ProjectShortImage {...image} />
        <ProjectShortDescription {...description} />
      </ProjectShortContainer>
    </ProjectShortSection>
  );
}
