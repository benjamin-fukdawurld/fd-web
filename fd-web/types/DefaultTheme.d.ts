import {
  BreakpointsOptions,
  PaletteOptions,
  SpacingOptions,
  TypographyOptions,
} from "../styles/utils";

import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    breakpoints: BreakpointsOptions;
    palette: PaletteOptions;
    spacing: SpacingOptions;
    typography: TypographyOptions;
  }
}
