import styled, { keyframes } from "styled-components";
import Surface, { SurfaceProps } from "../../glass-ui/Surface";

const entranceAnim = keyframes`
  0% {
    transform: scaleX(0);
    filter: blur(4px);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    filter: blur(0);
    opacity: 1;
  }
`;

const ContactButton = styled(Surface)<SurfaceProps>`
  position: relative;
  margin-bottom: 4rem;

  animation: ${entranceAnim} 1s 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.palette.primary.main.string()} 50%,
      ${(props) => props.theme.palette.secondary.main.string()} 100%
    );
    box-shadow: 0 0 15px 2px ${(props) => props.theme.palette.primary.main.string()},
      0 0 10px 1px ${(props) => props.theme.palette.secondary.main.string()};

    transform: scale(0.2, 1.1);
    transition: transform 150ms 100ms ease-in-out;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

export { ContactButton };
