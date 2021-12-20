import { ProjectImageContainer } from "./style";
import { ProjectImageProps } from "./interfaces";

export function ProjectImage(props: ProjectImageProps) {
  return (
    <ProjectImageContainer className="ProjectImage">
      <div className="imageContainer">
        <img src={props.src} alt={props.alt} />
      </div>
    </ProjectImageContainer>
  );
}
