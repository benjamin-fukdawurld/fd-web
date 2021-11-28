import Banner from "../Banner";

import Cloud from "./Cloud/Cloud";
import { CloudBannerProps } from "./interfaces";
import { cloudImageDefaultProps } from "./Cloud/interfaces";

export default function CloudBanner(props: CloudBannerProps) {
  return (
    <Banner>
      <Cloud
        invert={props.invert}
        brightness={props.brightness}
        contrast={props.contrast}
        opacity={props.opacity}
      />
      {props.children}
    </Banner>
  );
}

CloudBanner.defaultProps = cloudImageDefaultProps;
