import Color from "color";

export enum SizeNameIndex {
  xs = 0,
  sm = 1,
  md = 2,
  lg = 3,
  xl = 4,
}

export type SizeName = keyof typeof SizeNameIndex;

export interface BreakpointsOptions {
  values: number[];
  min: (name: SizeName) => number;
  max: (name: SizeName) => number;
  unit: string;
}

export interface ColorPaletteOptions {
  main: Color;
  light: Color;
  dark: Color;
  contrastText: Color;
}

export interface PaletteOptions {
  mode: string;
  common: {
    black: Color;
    white: Color;
  };
  background: {
    surface: Color;
    default: Color;
  };
  primary: ColorPaletteOptions;
  secondary: ColorPaletteOptions;
}

export interface FilterFunction {
  name: string;
  value: number | string;
  unit?: string;
}

export type TextTransform =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "full-width"
  | "full-size-kana";

export interface TagTypographyOptions {
  font?: string;
  weight?: number;
  size?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: TextTransform;
}

export interface SpacingOptions {
  baseSpacing: number;
  readonly spacing: (a: number, b?: number, c?: number, d?: number) => string;
}

export interface TypographyOptions {
  htmlFontSize: number;
  pxToRem: (val: number) => number;
  fontFamily?: string;
  fontSize?: number;
  fontWeights?: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  tags?: {
    [key: string]: TagTypographyOptions;
  };
}

export type BorderStyle =
  | "none"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export type BorderWidth = "thin" | "medium" | "thick" | number;

export interface BorderProps {
  style: BorderStyle;
  width: BorderWidth;
  color: string;
}
