import { BannerProps } from "../Banner/interfaces";
import { CloudProps, cloudImageDefaultProps } from "./Cloud/interfaces";

export type CloudBannerProps = BannerProps & CloudProps & typeof cloudImageDefaultProps;
