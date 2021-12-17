import ProjectCard, { ProjectCardProps } from "../ProjectCard";
import ProjectShort from "../ProjectShort";

import { Section } from "./style";

import { projects, shorts } from "./data";
import { ForwardedRef, forwardRef, useEffect, useMemo, useRef, useState } from "react";

import { useCombinedRefs, useVisible } from "../../glass-ui/hooks";
import { useTheme } from "styled-components";

const ProjectShortsSection = forwardRef<HTMLDivElement | null, { shorts: ProjectCardProps[] }>(
  (props, ref) => {
    const innerRef = useRef<HTMLElement | null>();
    const [observe, visible] = useVisible({ threshold: 0.25 });
    const combinedRef = useCombinedRefs(innerRef, ref);

    const children = props.shorts.map((project, index) => (
      <ProjectShort key={index} data-index={index} {...project} visible={visible} />
    ));

    useEffect(() => {
      if (combinedRef.current) {
        observe(combinedRef.current);
      }
    }, [observe, combinedRef]);

    return (
      <div className="shorts" ref={combinedRef}>
        {children}
      </div>
    );
  }
);

ProjectShortsSection.displayName = "ProjectShortsSection";

const ProjectCardsSection = forwardRef<HTMLDivElement | null, { projects: ProjectCardProps[] }>(
  (props, ref) => {
    const innerRef = useRef<HTMLElement | null>();
    const [observe, visible] = useVisible({ threshold: 0.25 });
    const combinedRef = useCombinedRefs(innerRef, ref);

    const children = props.projects.map((project, index) => (
      <ProjectCard key={index} data-index={index} {...project} visible={visible} />
    ));

    useEffect(() => {
      if (combinedRef.current) {
        observe(combinedRef.current);
      }
    }, [observe, combinedRef]);

    return (
      <div className="projects" ref={ref}>
        {children}
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
