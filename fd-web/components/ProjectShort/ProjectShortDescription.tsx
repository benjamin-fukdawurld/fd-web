import { ProjectDescriptionProps } from "../ProjectCard";
import { ProjectShortDescriptionContainer } from "./style";

export function ProjectShortDescription({ title, subtitle, tags }: ProjectDescriptionProps) {
  return (
    <ProjectShortDescriptionContainer>
      <p className="ProjectionShortDescription">{title}</p>
      <p className="ProjectionShortCompany">{subtitle}</p>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </ProjectShortDescriptionContainer>
  );
}
