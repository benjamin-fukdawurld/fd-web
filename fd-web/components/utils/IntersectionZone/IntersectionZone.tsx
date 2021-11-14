import { useState, useEffect, useRef } from "react";

import type { IntersectionZoneProps } from "./interfaces";
import { defaultProps } from "./interfaces";

export default function IntersectionZone({
  className,
  root,
  rootMargin,
  threshold,
  onIntersection,
  children,
}: IntersectionZoneProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    let observer = new IntersectionObserver(onIntersection, {
      root: typeof root === "undefined" ? ref.current : root,
      rootMargin: rootMargin,
      threshold: threshold,
    });

    let child = ref.current.firstElementChild;
    while (child) {
      observer.observe(child);
      child = child?.nextElementSibling;
    }
  }, [onIntersection, root, rootMargin, threshold]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}

IntersectionZone.defaultProps = defaultProps;
