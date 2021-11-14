import type { ReactNode } from "react";

interface BaseIntersectionZoneProps {
  className?: string;
  onIntersection: IntersectionObserverCallback;
  children?: ReactNode;
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const defaultProps = {
  rootMargin: "0px",
  threshold: 1,
};

export type IntersectionZoneProps = BaseIntersectionZoneProps & typeof defaultProps;

export { defaultProps };
