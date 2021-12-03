import React, { ReactNode, ComponentType } from "react";
import GlassSurface from "../../../../utils/GlassSurface";

interface BaseButtonProps {
  as?: string | React.ComponentType<any>;
  children?: ReactNode;
}

const defaultProps = {
  as: GlassSurface,
};

export type ButtonProps = BaseButtonProps & typeof defaultProps;

export default function Button({ as, children, ...props }: ButtonProps) {
  const TagName = as ?? "div";
  return <TagName {...props}>{children}</TagName>;
}

Button.defaultProps = defaultProps;
