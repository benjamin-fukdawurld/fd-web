import styled from "styled-components";

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: clip;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
`;

export { Container, Overlay };
