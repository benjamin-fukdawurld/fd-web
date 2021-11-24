import { useEffect, forwardRef, ForwardedRef } from "react";

import type { IntersectionZoneProps } from "./interfaces";
import { defaultProps } from "./interfaces";

const IntersectionZone = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    let observer = new IntersectionObserver(props.onIntersection, {
      root: typeof props.root === "undefined" ? ref.current : props.root,
      rootMargin: props.rootMargin,
      threshold: props.threshold,
    });

    let child = ref.current.firstElementChild;
    while (child) {
      observer.observe(child);
      child = child?.nextElementSibling;
    }
  }, [props.onIntersection, props.root, props.rootMargin, props.threshold, ref]);

  return (
    <div className={props.className} ref={ref}>
      {props.children}
    </div>
  );
});

IntersectionZone.displayName = "IntersectionZone";
IntersectionZone.defaultProps = defaultProps;

export default IntersectionZone;

/*const IntersectionZone = forwardRef(({className,
  root,
  rootMargin,
  threshold,
  onIntersection,
  children,}: IntersectionZoneProps, ref: ForwardedRef<HTMLDivElement>) => {

  useEffect(() => {
    if (!ref?.current) {
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
*/
