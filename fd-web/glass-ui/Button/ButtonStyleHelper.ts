import { css, DefaultTheme } from "styled-components";
import { SizeName } from "../../styles/utils";
import { SurfaceProps } from "../Surface";
import { BaseButtonProps, ButtonColor, ButtonVariant } from "./interfaces";

export default class ButtonStyleHelper {
  readonly size: SizeName;
  readonly variant: ButtonVariant;
  readonly color: ButtonColor;
  readonly theme: DefaultTheme;

  constructor(props: BaseButtonProps & SurfaceProps) {
    this.size = props.size ?? "md";
    this.variant = props.variant ?? "outlined";
    this.color = props.color ?? "primary";
    this.theme = props.theme;
  }

  get height(): string {
    switch (this.size) {
      case "xs":
        return "2rem";
      case "sm":
        return "3rem";
      case "md":
        return "4rem";
      case "lg":
        return "6rem";
      case "xl":
        return "8rem";
    }
  }

  get width(): string {
    switch (this.size) {
      case "xs":
        return "4rem";
      case "sm":
        return "6rem";
      case "md":
        return "10rem";
      case "lg":
        return "15rem";
      case "xl":
        return "16rem";
    }
  }

  get fontSize(): string {
    switch (this.size) {
      case "xs":
        return "0.875rem";
      case "sm":
        return "1.125rem";
      case "md":
        return "1.25rem";
      case "lg":
        return "1.5rem";
      case "xl":
        return "2rem";
    }
  }

  get fontWeight(): string {
    return `${this.theme.typography.fontWeights?.bold ?? 700}`;
  }

  get padding(): string {
    switch (this.size) {
      case "xs":
        return "0.125rem";
      case "sm":
        return "0.25rem";
      case "md":
        return "0.5rem";
      case "lg":
        return "0.625rem";
      case "xl":
        return "0.750rem";
    }
  }

  get background(): string {
    const colors = [this.theme.palette.primary.main, this.theme.palette.secondary.main];

    let index = -1;
    switch (this.color) {
      case "primary":
        index = 0;
        break;
      case "secondary":
        index = 1;
        break;
    }

    return `
          background: linear-gradient(
            -45deg,
            ${colors[(index + 1) % 2].lighten(0.1).alpha(0.1).string()},
            ${colors[index].alpha(0.1).string()}
          );
        `;
  }

  get borderColor(): string {
    const colors = [this.theme.palette.primary.main, this.theme.palette.secondary.main];

    let index = -1;
    switch (this.color) {
      case "primary":
        index = 0;
        break;
      case "secondary":
        index = 1;
        break;
    }

    return `
          background: linear-gradient(
            -45deg,
            ${colors[index].alpha(0.35).string()},
            ${colors[(index + 1) % 2].alpha(0.35).string()}
          );
        `;
  }

  get foreground(): string {
    const colors = [this.theme.palette.common.white, this.theme.palette.common.white];

    switch (this.color) {
      case "primary":
        return `
          background: linear-gradient(
            -45deg,
            ${colors[0].string()},
            ${colors[0].lighten(0.45).string()}
          );
        `;
      case "secondary":
        return `
          background: linear-gradient(
            -45deg,
            ${colors[1].string()},
            ${colors[0].string()}
          );
        `;
    }
  }

  get overlayColor(): string {
    const colors = [this.theme.palette.primary.main, this.theme.palette.secondary.main];

    switch (this.color) {
      case "primary":
        return `background: linear-gradient(
          to left,
          ${colors[1].alpha(0.02).string()},
          ${this.theme.palette.common.white.alpha(0.01).string()}
        );`;
      case "secondary":
        return `
        background: linear-gradient(
          to left,
          ${colors[0].alpha(0.1).string()},
          ${this.theme.palette.common.white.alpha(0.01).string()}
        );
        `;
    }
  }

  get borderWidth(): string {
    switch (this.size) {
      case "xs":
        return "0.07rem";
      case "sm":
        return "0.125rem";
      case "md":
        return "0.25rem";
      case "lg":
        return "0.5rem";
      case "xl":
        return "0.625rem";
    }
  }

  get borderRadius(): string {
    switch (this.size) {
      case "xs":
        return "0.125rem";
      case "sm":
        return "0.25rem";
      case "md":
      case "lg":
      case "xl":
        return "0.375rem";
    }
  }

  get font() {
    return css`
      color: transparent;
      ${this.foreground}
      -webkit-background-clip: text;
      background-clip: text;

      font-size: ${this.fontSize};
      font-weight: ${this.fontWeight};
    `;
  }

  get border() {
    return css`
      border-style: none;
      border-radius: ${this.borderRadius};
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        ${this.borderColor}
        border-radius: ${this.borderRadius};
        clip-path: polygon(
          0% 0%,
          0% 100%,
          ${this.borderWidth} 100%,
          ${this.borderWidth} ${this.borderWidth},
          calc(100% - ${this.borderWidth}) ${this.borderWidth},
          calc(100% - ${this.borderWidth}) calc(100% - ${this.borderWidth}),
          ${this.borderWidth} calc(100% - ${this.borderWidth}),
          ${this.borderWidth} 100%,
          100% 100%,
          100% 0%
        );
      }
    `;
  }
}

export function sizeNameToSize(name: SizeName): string {
  switch (name) {
    case "xs":
      return "2rem";
    case "sm":
      return "3rem";
    case "md":
      return "4rem";
    case "lg":
      return "6rem";
    case "xl":
      return "8rem";
  }
}

export function sizeNameToFontSize(name: SizeName): string {
  switch (name) {
    case "xs":
      return "0.875rem";
    case "sm":
      return "1.125rem";
    case "md":
      return "1.25rem";
    case "lg":
      return "1.5rem";
    case "xl":
      return "2rem";
  }
}

export function sizeNameToPadding(name: SizeName): string {
  switch (name) {
    case "xs":
      return "0";
    case "sm":
      return "0.25rem";
    case "md":
      return "0.5rem";
    case "lg":
      return "1rem";
    case "xl":
      return "2rem";
  }
}

export function backgroundGenerator(color: "primary" | "secondary", theme: DefaultTheme): string {
  const colors = [theme.palette.primary.main, theme.palette.secondary.main];

  switch (color) {
    case "primary":
      return `
        background: linear-gradient(
          -45deg,
          ${colors[0].darken(0.25).alpha(1.0).string()},
          ${colors[1].lighten(0.15).alpha(1.0).string()}
        );
      `;
    case "secondary":
      return `
        background: linear-gradient(
          -45deg,
          ${colors[1].darken(0.25).alpha(0.6).string()},
          ${colors[0].lighten(0.15).alpha(0.6).string()}
        );
      `;
  }
}

export function foregroundGenerator(color: "primary" | "secondary", theme: DefaultTheme): string {
  const colors = [theme.palette.primary.main, theme.palette.secondary.main];

  switch (color) {
    case "primary":
      return `
          background: linear-gradient(
            -45deg,
            ${colors[0].lighten(0.45).string()},
            ${colors[1].lighten(0.45).string()}
          );
        `;
    case "secondary":
      return `
          background: linear-gradient(
            -45deg,
            ${colors[1].lighten(0.45).string()},
            ${colors[0].lighten(0.45).string()}
          );
        `;
  }
}
