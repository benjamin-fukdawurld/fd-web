import { DefaultTheme } from "styled-components";
import {
  BreakpointsOptions,
  PaletteOptions,
  TypographyOptions,
  SpacingOptions,
  Typography,
  Spacing,
  SizeNameIndex,
} from "../utils";
import Color from "color";
import { SizeName } from "../utils";

const breakpointValues = [0, 600, 900, 1200, 1536];

export default class Theme implements DefaultTheme {
  public breakpoints: BreakpointsOptions;
  public palette: PaletteOptions;
  public typography: TypographyOptions;
  public spacing: SpacingOptions;

  constructor() {
    this.breakpoints = {
      values: breakpointValues,
      min: (name: SizeName) => breakpointValues[SizeNameIndex[name]],
      max: (name: SizeName) =>
        name === "xl" ? Number.MAX_VALUE : breakpointValues[SizeNameIndex[name] + 1] - 1,
      unit: "px",
    };

    this.palette = {
      mode: "light",
      common: {
        black: new Color("#22222e"),
        white: new Color("#c3c3e6"),
      },
      background: {
        surface: new Color("white"),
        default: new Color("white"),
      },
      primary: {
        main: new Color("#1b27b3"),
        light: new Color("#6151e6"),
        dark: new Color("#000182"),
        contrastText: new Color("white"),
      },
      secondary: {
        main: new Color("#440044"),
        light: new Color("#723070"),
        dark: new Color("#23001e"),
        contrastText: new Color("white"),
      },
    };

    this.typography = new Typography();
    this.spacing = new Spacing();
  }
}
