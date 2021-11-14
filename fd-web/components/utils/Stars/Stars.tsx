import { ReactNode, useRef } from "react";
import { useEffect, useState } from "react";
import { Container, StarsDiv } from "./style";
import type { ShadowGeneratorOptions } from "./interfaces";

function shadowGenerator({ color = "#fff", ...options }: ShadowGeneratorOptions) {
  let result: string[] = [];
  const getPosition = (max: number) => Math.floor(Math.random() * max + 1);
  for (let i = 0; i < options.count; ++i) {
    result.push(`${getPosition(options.maxX)}px ${getPosition(options.maxY + 2000)}px ${color}`);
  }

  return result.join(",") + ";";
}

export default function Stars() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [stars, setStars] = useState<ReactNode[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const width = window.innerWidth;
    const height = ref.current?.offsetHeight || 1000;

    setStars([
      <StarsDiv
        key={0}
        width={1}
        height={1}
        animationDuration={75}
        shadow={shadowGenerator({ count: 1000, maxX: width, maxY: height })}
      />,
      <StarsDiv
        key={1}
        width={2}
        height={2}
        animationDuration={100}
        shadow={shadowGenerator({ count: 500, maxX: width, maxY: height })}
      />,
      <StarsDiv
        key={2}
        width={3}
        height={3}
        animationDuration={150}
        shadow={shadowGenerator({ count: 250, maxX: width, maxY: height })}
      />,
      ,
      <StarsDiv
        key={3}
        width={4}
        height={4}
        animationDuration={200}
        shadow={shadowGenerator({ count: 100, maxX: width, maxY: height })}
      />,
    ]);
  }, [windowWidth]);

  return <Container ref={ref}>{stars}</Container>;
}
