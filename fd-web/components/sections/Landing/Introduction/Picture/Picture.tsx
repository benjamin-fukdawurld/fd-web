import Image from "next/image";
import { PictureContainer, PictureContainer2, PictureOctogon, Name, PictureCell } from "./style";

export default function Picture({ src }: { src: string }) {
  return (
    <PictureContainer>
      <div>
        <Image src={src} layout="fill" objectFit="cover" alt="Ben's face" />
      </div>
    </PictureContainer>
  );
}

export function Picture2(props: any) {
  return (
    <PictureCell>
      <PictureContainer2 glassColor="rgba(0, 0, 255, 0.15)" borderColor="rgba(0, 0, 255, 0.2)">
        <PictureOctogon>
          <Image src="/images/ben.webp" alt="photo de benjamin" layout="fill" objectFit="cover" />
        </PictureOctogon>
        <Name>Benjamin Zamour</Name>
      </PictureContainer2>
    </PictureCell>
  );
}
