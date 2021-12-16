import { ReactNode } from "react";

export interface JobSectionProps {
  children?: ReactNode;
  title: string;
  highlights: [string, string, string];
}
