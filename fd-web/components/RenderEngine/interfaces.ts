import * as THREE from "three";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

import SceneManager from "../SceneManager/SceneManager";

export interface RendererOptions {
  container: HTMLDivElement;
}

export enum RenderEngineState {
  NotInitialized,
  Stopped,
  Running,
}

export interface UpdateEnvironment {
  engine: IRenderEngine;
}

export type RenderEngineUpdateCallBack = (env: UpdateEnvironment, ...args: any[]) => boolean;

export interface IRenderEngine {
  readonly renderer: THREE.WebGLRenderer;
  readonly container: HTMLDivElement;
  readonly state: RenderEngineState;

  readonly lastUpdate: number;
  readonly deltaTime: number;

  readonly pixelRatio: number;
  readonly size: THREE.Vector2;
  readonly resolution: THREE.Vector2;

  readonly render: (obj: THREE.Object3D, camera: THREE.Camera, deltaTime: number) => void;
  readonly getRenderPass: (scene: THREE.Scene, camera: THREE.Camera) => RenderPass;
  readonly getFxaaPass: () => ShaderPass;
  readonly getCopyPass: () => ShaderPass;
  readonly start: (cb: RenderEngineUpdateCallBack, ...args: any[]) => void;
  readonly stop: () => void;
}
