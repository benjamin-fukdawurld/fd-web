import ProjectCard from "../ProjectCard";
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
    </Section>
  );
}
