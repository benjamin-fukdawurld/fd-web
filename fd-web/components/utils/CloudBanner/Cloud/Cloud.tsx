import { CloudProps } from "./interfaces";
import { CloudDiv, CloudImage, Clouds } from "./style";

export default function Cloud(props: CloudProps) {
  return (
    <Clouds>
      <CloudDiv>
        <CloudImage src={`/images/cloud.webp`} alt={`cloud image`} index={0} count={2} {...props} />
        <CloudImage src={`/images/cloud.webp`} alt={`cloud image`} index={1} count={2} {...props} />
      </CloudDiv>
    </Clouds>
  );
}
