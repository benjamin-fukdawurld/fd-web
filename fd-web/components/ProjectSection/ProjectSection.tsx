import ProjectCard, { ProjectCardProps } from "../ProjectCard";
import ProjectShort from "../ProjectShort";

import { Section } from "./style";

import { projects, shorts } from "./data";
import { ForwardedRef, forwardRef } from "react";

const ProjectShortsSection = forwardRef<HTMLDivElement | null, { shorts: ProjectCardProps[] }>(
  (props, ref) => {
    return (
      <div className="shorts" ref={ref}>
        {props.shorts.map((project, index) => (
          <ProjectShort key={index} data-index={index} {...project} visible />
        ))}
      </div>
    );
  }
);

ProjectShortsSection.displayName = "ProjectShortsSection";

const ProjectCardsSection = forwardRef<HTMLDivElement | null, { projects: ProjectCardProps[] }>(
  (props, ref) => {
    return (
      <div className="projects" ref={ref}>
        {props.projects.map((project, index) => (
          <ProjectCard key={index} data-index={index} {...project} visible />
        ))}
      </div>
    );
  }
);

ProjectCardsSection.displayName = "ProjectCardsSection";

const ProjectSection = forwardRef<HTMLElement, any>(
  (props: any, ref: ForwardedRef<HTMLElement>) => {
    return (
      <Section ref={ref} {...props}>
        <ProjectShortsSection shorts={shorts[0]} />
        <ProjectCardsSection projects={projects} />
        <ProjectShortsSection shorts={shorts[1]} />
      </Section>
    );
  }
);

ProjectSection.displayName = "ProjectionSection";

export default ProjectSection;
