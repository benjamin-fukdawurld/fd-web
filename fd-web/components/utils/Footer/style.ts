import styled from "styled-components";

import GlassSurface from "../GlassSurface";

const FooterContainer = styled(GlassSurface)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 -10px 15px -5px rgba(0, 0, 0, 0.1), 0 -4px 6px -4px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export { FooterContainer };
