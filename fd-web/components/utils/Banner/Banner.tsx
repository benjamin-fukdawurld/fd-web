import { BannerContainer, Banner as StyledBanner, BannerTitle } from "./style";

import { BannerProps } from "./interfaces";

export default function Banner(props: BannerProps) {
  return (
    <BannerContainer>
      <StyledBanner>
        <BannerTitle>{props.children}</BannerTitle>
      </StyledBanner>
    </BannerContainer>
  );
}
