import type { ForwardedRef } from "react";

import React from "react";
import type { WaterDropProps } from "./interfaces";
import { Drop, Shininess } from "./style";

const WaterDrop = React.forwardRef((props: WaterDropProps, ref: ForwardedRef<HTMLElement>) => (
  <Drop ref={ref} {...props}>
    <Shininess y="20%" x="24%" h="10%" w="10%" />
    <Shininess y="28%" x="38%" h="6%" w="6%" />
  </Drop>
));

WaterDrop.displayName = "WaterDrop";

export default WaterDrop;
