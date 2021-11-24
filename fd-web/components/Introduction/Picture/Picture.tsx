import Image from "next/image";
import { PictureContainer } from "./style";

export default function Picture({ src }: { src: string }) {
  return (
    <PictureContainer>
      <div>
        <Image src={src} layout="fill" objectFit="cover" alt="Ben's face" />
      </div>
    </PictureContainer>
  );
}
