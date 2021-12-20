import { ProjectCardContainer, StyledTilt } from "./style";
import { ProjectCardProps } from "./interfaces";
import { ProjectImage } from "./ProjectImage";
import { ProjectDescription } from "./ProjectDescription";

export default function ProjectCard({ image, description }: ProjectCardProps) {
  return (
    <StyledTilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
      <div className="backTic" />
      <ProjectCardContainer>
        <ProjectImage {...image} />
        <ProjectDescription {...description} />
      </ProjectCardContainer>
    </StyledTilt>
  );
}
