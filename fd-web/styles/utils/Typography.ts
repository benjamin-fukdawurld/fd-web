import { TypographyOptions, TagTypographyOptions } from "./interfaces";

export default class Typography implements TypographyOptions {
  public htmlFontSize: number;
  public fontFamily?: string;
  public fontSize?: number;
  public fontWeights?: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  public tags?: {
    [key: string]: TagTypographyOptions;
  };

  constructor() {
    this.htmlFontSize = 16;
    this.pxToRem = (val: number) => val / 16;
    this.fontFamily = `"Roboto", "Helvetica", "Arial", sans-serif`;
    this.fontSize = 14;
    this.fontWeights = {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    };
    this.tags = {
      h1: {
        weight: 300,
        size: "6rem",
        lineHeight: "1.167rem",
        letterSpacing: "-0.01562em",
      },
      h2: {
        weight: 300,
        size: "3.75rem",
        lineHeight: "1.2rem",
        letterSpacing: "-0.00833em",
      },
      h3: {
        weight: 400,
        size: "3rem",
        lineHeight: "1.167rem",
        letterSpacing: "0em",
      },
      div: {
        weight: 400,
        size: "1rem",
      },
    };
  }

  public pxToRem(val: number): number {
    return val / this.htmlFontSize;
  }
}
