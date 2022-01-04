import { ProjectCardContainer, StyledTilt } from "./style";
import { ProjectCardProps } from "./interfaces";
import { ProjectImage } from "./ProjectImage";
import { ProjectDescription } from "./ProjectDescription";
import { forwardRef } from "react";

const ProjectCard = forwardRef<HTMLElement | null, ProjectCardProps>(
  ({ image, description }, ref) => {
    return (
      <StyledTilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className="backTic" />
        <ProjectCardContainer ref={ref}>
          <ProjectImage {...image} />
          <ProjectDescription {...description} />
        </ProjectCardContainer>
      </StyledTilt>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
