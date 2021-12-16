import { ForwardedRef, forwardRef } from "react";
import Screen, { defaultProps, ScreenProps } from "./Screen";

const Section = forwardRef<HTMLElement, ScreenProps>(
  ({ min, ...props }: ScreenProps, ref: ForwardedRef<HTMLElement>) => {
    return <Screen ref={ref} forwardedAs="section" min={min} {...props} />;
  }
);

Section.displayName = "Section";
Section.defaultProps = defaultProps;

export { defaultProps };
export type { ScreenProps as SectionProps };

export default Section;
