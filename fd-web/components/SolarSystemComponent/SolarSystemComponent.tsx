import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";

import SolarSystem from "./SolarSystem";
import SceneManager from "../../gl-tools/SceneManager";
import RenderEngine from "../../gl-tools/RenderEngine";

const SolarSystemContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
`;

interface SolarSystemComponentProps {
  children?: ReactNode;
  onLoaded?: (system: SolarSystem) => void;
}

export default function SolarSystemComponent(props: SolarSystemComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current || isLoaded) {
      return;
    }

    const engine = new RenderEngine({ container: containerRef.current });
    let sceneMgr = new SceneManager({
      camera: {
        aspect: (containerRef.current.offsetWidth || 1) / (containerRef.current.offsetHeight || 1),
        fov: 75,
        position: new THREE.Vector3(-5, 6, 30),
        rotation: new THREE.Euler(-0.12359256265326496, -0.5207497667809622, -0.061727589039210155),
      },
    });

    const solarSystem = new SolarSystem();
    engine.init();
    window.addEventListener(
      "resize",
      () => {
        engine.renderer.setSize(engine.container.offsetWidth, engine.container.offsetHeight);
        solarSystem.composer?.setSize(engine.container.offsetWidth, engine.container.offsetHeight);

        sceneMgr.camera.aspect = engine.container.offsetWidth / engine.container.offsetHeight;
        sceneMgr.camera.updateProjectionMatrix();
      },
      false
    );

    solarSystem.load(sceneMgr, engine).then(() => {
      if (props.onLoaded) {
        props.onLoaded(solarSystem);
      }

      engine.start((env) => {
        const deltaTime = env.engine.deltaTime;
        solarSystem.update(engine, deltaTime);
        solarSystem.render(engine, deltaTime);
        return true;
      });
    });

    setLoaded(true);
  }, [isLoaded]);
  return <SolarSystemContainer ref={containerRef}>{props.children}</SolarSystemContainer>;
}
