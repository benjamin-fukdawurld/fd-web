import { ReactNode } from "react";
import { IntroductionCardProps } from "./IntroductionCard/interfaces";

export interface IntroductionProps {
  cardProps: IntroductionCardProps;
  children?: ReactNode;
}
