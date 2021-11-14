import type { WaterDropProps } from "./interfaces";
import React, { useEffect, useState } from "react";

import WaterDrop from "./WaterDrop";

export default function WaterDrops() {
  const [circles, setCircles] = useState<WaterDropProps[]>([]);
  const [windowSize, setWindowSize] = useState<any>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    setCircles(
      [...new Array(5)].map((undefined, index: number) => ({
        size: `${4 + Math.random() * 12}rem`,
        color: `rgba(128, 128, ${196 + Math.floor(Math.random() * 60)}, 0.15)`,
        pos: {
          x: Math.floor(Math.random() * (window.innerWidth + 100) - 100),
          y: Math.floor(Math.random() * window.innerHeight),
        },
      }))
    );
  }, [windowSize]);

  return (
    <>
      {circles.map((circle: WaterDropProps, index: number) => (
        <WaterDrop key={index} {...circle} />
      ))}
    </>
  );
}
