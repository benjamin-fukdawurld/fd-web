import type { ReactNode } from "react";

interface BaseBackgroundImageProps {
  children: ReactNode;
  imageSrc: string;
}

const defaultProps = {
  imageSrc: "/images/bg-image.webp",
};

export type BackgroundImageProps = BaseBackgroundImageProps & typeof defaultProps;
export { defaultProps };
