import styled from "styled-components";
import Surface, { SurfaceProps } from "../../../glass-ui/Surface";

import { FormationContainer } from "./style";
import { badges } from "./data";
import { FormationBadge } from "./FormationBadge";

export function ProfileFormation(props: any) {
  return (
    <FormationContainer>
      <h3>Formation</h3>
      <ul>
        {badges.map((badge, index) => (
          <li key={index}>
            <FormationBadge {...badge} />
          </li>
        ))}
      </ul>
    </FormationContainer>
  );
}
