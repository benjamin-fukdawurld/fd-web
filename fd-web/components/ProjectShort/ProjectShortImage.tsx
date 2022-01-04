import { ProjectImageProps } from "../ProjectCard";
import { ProjectShortImageContainer } from "./style";

export function ProjectShortImage({ src, alt }: ProjectImageProps) {
  return (
    <ProjectShortImageContainer>
      <img src={src} alt={alt} />
    </ProjectShortImageContainer>
  );
}
