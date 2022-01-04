import React from "react";

const SurfaceDiv = React.forwardRef<HTMLElement>(
  (
    { as, children, forwardedProps, className, ...props }: any,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    // Little hack to forward props through styled-components hierarchy
    const TagName = as ?? "div";
    return (
      <TagName className={className} {...forwardedProps} ref={ref}>
        {children}
      </TagName>
    );
  }
);

SurfaceDiv.displayName = "SurfaceDiv";

export default SurfaceDiv;
