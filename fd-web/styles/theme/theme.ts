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
        main: new Color("#0f44f0"),
        light: new Color("#3f69f3"),
        dark: new Color("#0c36c0"),
        contrastText: new Color("white"),
      },
      secondary: {
        main: new Color("#7721cb"),
        light: new Color("#6631d5"),
        dark: new Color("#8711c1"),
        contrastText: new Color("white"),
      },
    };

    this.typography = new Typography();
    this.spacing = new Spacing();
  }
}
