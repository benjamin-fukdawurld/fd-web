import React from "react";
import Image from "next/image";

import type { BackgroundImageProps } from "./interfaces";

import { Container, Overlay } from "./style";
import { defaultProps } from "./interfaces";

export default function BackgroundImage(props: BackgroundImageProps) {
  return (
    <Container>
      <Image src={props.imageSrc} layout="fill" objectFit="cover" alt="background image" />
      <Overlay>{props.children}</Overlay>
    </Container>
  );
}

BackgroundImage.defaultProps = defaultProps;
