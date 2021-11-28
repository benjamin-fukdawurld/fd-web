import styled from "styled-components";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 130vh;
  padding-top: 5rem;
  padding-bottom: 12rem;

  @media (min-width: 768px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

export { Container };
