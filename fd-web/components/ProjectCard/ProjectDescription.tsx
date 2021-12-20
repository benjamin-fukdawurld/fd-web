import { ProjectDescriptionContainer } from "./style";
import { ProjectDescriptionProps } from "./interfaces";

export function ProjectDescription(props: ProjectDescriptionProps) {
  return (
    <ProjectDescriptionContainer className="descriptionSection">
      <div className="descriptionContainer">
        <h3>{props.title}</h3>
        <p className="subtitle">{props.subtitle}</p>
        <p className="description">{props.text}</p>
        <ul className="tags">
          {props.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </ProjectDescriptionContainer>
  );
}
