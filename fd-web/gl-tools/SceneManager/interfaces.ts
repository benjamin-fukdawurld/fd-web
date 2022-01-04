import { Scene, PerspectiveCamera, Vector3, Euler } from "three";
import { RenderEngineUpdateCallBack, UpdateEnvironment } from "../RenderEngine/interfaces";

export interface ISceneManager {
  readonly scene: Scene;
  readonly camera: PerspectiveCamera;

  updateCallback?: RenderEngineUpdateCallBack;
}

export interface CameraOptions {
  aspect: number;
  position?: Vector3;
  rotation?: Euler;
  fov?: number;
  near?: number;
  far?: number;
}

export interface SceneOptions {
  camera: CameraOptions;
}

export type SceneManagerInitCallBack = (engine: ISceneManager, ...args: any[]) => Promise<boolean>;

export type SceneManagerUpdateCallBack = (
  sceneMgr: ISceneManager,
  env: UpdateEnvironment,
  ...args: any[]
) => boolean;
