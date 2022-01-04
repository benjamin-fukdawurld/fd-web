import { BorderProps, BorderStyle, BorderWidth } from "./interfaces";

export default class Border implements BorderProps {
  public style: BorderStyle;
  public width: BorderWidth;
  public color: string;

  constructor({ style, width, color }: BorderProps) {
    this.style = style;
    this.width = width;
    this.color = color;
  }

  toString(): string {
    return `${this.style} ${this.width}`;
  }
}
