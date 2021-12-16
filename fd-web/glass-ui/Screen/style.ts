import { defaultProps, ScreenProps } from "./interfaces";

import styled from "styled-components";

import Surface from "../Surface";

const Screen = styled(Surface)<ScreenProps>`
  ${({ min, max, fixed }: ScreenProps) => {
    const result: string[] = [];
    if (min || fixed) {
      result.push(`
        min-width: 100%;
        min-height: 100vh;
      `);
    }

    if (max || fixed) {
      result.push(`
        max-width: 100%;
        max-height: 100vh;
      `);
    }

    return result.join("\n");
  }}
`;

Screen.defaultProps = defaultProps;

export default Screen;
