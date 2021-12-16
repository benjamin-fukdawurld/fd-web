import { SpacingOptions } from "./interfaces";

export default class Spacing implements SpacingOptions {
  public baseSpacing: number;
  constructor(baseSpacing?: number) {
    this.baseSpacing = baseSpacing ?? 1;
  }

  public spacing(a: number, b?: number, c?: number, d?: number): string {
    return [a, b, c, d]
      .filter((val?: number) => !!val)
      .map((val?: number) => `${val! * this.baseSpacing}rem`)
      .join(" ");
  }
}
