import Screen, { defaultProps, ScreenProps } from "./Screen";

export default function Section({ min, ...props }: ScreenProps) {
  return <Screen forwardedAs="section" min={min} {...props} />;
}

Section.defaultProps = defaultProps;

export { defaultProps };
export type { ScreenProps as SectionProps };
