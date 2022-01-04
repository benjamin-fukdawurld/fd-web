import { forwardRef } from "react";
import { ProjectCardProps } from "../ProjectCard";
import { ProjectShortDescription } from "./ProjectShortDescription";
import { ProjectShortImage } from "./ProjectShortImage";

import { ProjectShortSection, ProjectShortContainer } from "./style";

const ProjectShort = forwardRef<HTMLElement, ProjectCardProps>(
  ({ image, description, visible }, ref) => {
    return (
      <ProjectShortSection ref={ref} visible={visible}>
        <div className="backTic" />
        <ProjectShortContainer className="ProjectShort">
          <ProjectShortImage {...image} />
          <ProjectShortDescription {...description} />
        </ProjectShortContainer>
      </ProjectShortSection>
    );
  }
);

ProjectShort.displayName = "ProjectShort";

export default ProjectShort;
