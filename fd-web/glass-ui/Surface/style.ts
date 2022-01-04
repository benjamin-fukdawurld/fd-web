import styled from "styled-components";
import { Filter } from "../../styles/utils";

import { SurfaceProps } from "./interfaces";
import SurfaceDiv from "./Surface";

function genCssProp(options: { name: string; unit?: string; value?: any }) {
  if (!options.value) {
    return "";
  }

  return `${options.name}: ${options.value}${options.unit ?? ""}`;
}

const Surface = styled(SurfaceDiv)<SurfaceProps>`
  ${(props) => (props.filter ? `filter: ${new Filter(props.filter).toString()};` : "")}
  ${(props) =>
    props.backdropFilter ? `backdrop-filter: ${new Filter(props.backdropFilter).toString()};` : ""}
  ${(props) => {
    return [
      genCssProp({ name: "position", value: props.position }),
      genCssProp({ name: "width", value: props.w }),
      genCssProp({ name: "height", value: props.h }),
      genCssProp({ name: "top", value: props.t }),
      genCssProp({ name: "bottom", value: props.b }),
      genCssProp({ name: "left", value: props.l }),
      genCssProp({ name: "right", value: props.r }),
      genCssProp({ name: "z-index", value: props.z }),
    ].join(";\n");
  }}
`;

export default Surface;
