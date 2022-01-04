import Banner from "../Banner";

import Cloud from "./Cloud/Cloud";
import { BannerProps } from "../Banner";

export default function CloudBanner({ children, ...props }: BannerProps) {
  return (
    <Banner {...props}>
      <Cloud />
      {children}
    </Banner>
  );
}
