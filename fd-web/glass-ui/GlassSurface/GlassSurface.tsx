import { forwardRef } from "react";
import { useTheme, DefaultTheme } from "styled-components";
import { FilterFunction } from "../../styles/utils";
import Surface from "../Surface";
import { GlassSurfaceProps, defaultProps } from "./interfaces";

const GlassSurface = forwardRef<HTMLElement, GlassSurfaceProps>(
  (
    { blurSize, backdropFilter, ...props }: GlassSurfaceProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const theme: DefaultTheme = useTheme();
    const filters: FilterFunction[] = backdropFilter ?? [];
    let blurFunction = filters.find((value: FilterFunction) => value.name === "blur");
    if (!blurFunction) {
      blurFunction = {
        name: "blur",
        value: 0,
        unit: "px",
      };

      filters.push(blurFunction);
    }

    const baseSize = theme.typography.htmlFontSize / 4;
    switch (blurSize) {
      case "xs":
        blurFunction.value = baseSize;
        break;
      case "sm":
        blurFunction.value = baseSize * 2;
        break;
      case "md":
        blurFunction.value = baseSize * 3;
        break;
      case "lg":
        blurFunction.value = baseSize * 4;
        break;
      case "xl":
        blurFunction.value = baseSize * 5;
        break;
    }

    return <Surface backdropFilter={filters} {...props} ref={ref} />;
  }
);

GlassSurface.displayName = "GlassSurface";

GlassSurface.defaultProps = defaultProps;

export default GlassSurface;
