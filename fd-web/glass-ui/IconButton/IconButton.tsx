import { IconButtonProps } from "./interfaces";
import { IconButtonContainer } from "./style";

export default function IconButton({ children, forwardedProps, ...props }: IconButtonProps) {
  const fprops = Object.assign({ disabled: props.disabled }, forwardedProps);

  return (
    <IconButtonContainer forwardedAs={"button"} forwardedProps={fprops} {...props}>
      <div className="iconButton">
        <div className="iconContainer">{children}</div>
      </div>
    </IconButtonContainer>
  );
}
