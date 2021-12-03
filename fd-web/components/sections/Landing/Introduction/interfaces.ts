import { ReactNode } from "react";
import { IntroductionCardProps } from "./IntroductionCard/interfaces";

export interface IntroductionProps {
  introductionCardProps: IntroductionCardProps;
  children?: ReactNode;
}
