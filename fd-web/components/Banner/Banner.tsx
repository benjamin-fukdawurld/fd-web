import { BannerContainer } from "./style";
import { BannerProps } from "./interfaces";
import { useTheme } from "styled-components";

export default function Banner(props: BannerProps) {
  const theme = useTheme();
  return (
    <BannerContainer theme={theme}>
      <div className="banner">
        <div className="bannerTitle">{props.title}</div>
        {props.children}
      </div>
    </BannerContainer>
  );
}
