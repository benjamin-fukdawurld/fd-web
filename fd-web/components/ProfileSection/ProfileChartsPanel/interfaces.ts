import { SurfaceProps } from "../../../glass-ui/Surface";

export interface ProfileChartProps extends SurfaceProps {
  labels: string[];
  values: number[];
}
