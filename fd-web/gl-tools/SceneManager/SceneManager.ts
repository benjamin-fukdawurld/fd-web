import type { ISceneManager, SceneManagerUpdateCallBack, SceneOptions } from "./interfaces";

import { Scene, PerspectiveCamera } from "three";
import { RenderEngineUpdateCallBack, UpdateEnvironment } from "../RenderEngine/interfaces";

export default class SceneManager implements ISceneManager {
  private _scene: Scene;
  private _camera: PerspectiveCamera;
  private _updateCallback?: RenderEngineUpdateCallBack;

  constructor(options: SceneOptions) {
    this._scene = new Scene();
    this._camera = new PerspectiveCamera(
      options.camera.fov || 75,
      options.camera.aspect,
      options.camera.near,
      options.camera.far
    );
    if (options?.camera?.position) {
      this._camera.position.copy(options.camera.position);
    }

    if (options?.camera?.rotation) {
      this._camera.rotation.copy(options.camera.rotation);
    }
  }

  get scene(): Scene {
    return this._scene;
  }

  get camera(): PerspectiveCamera {
    return this._camera;
  }

  get updateCallback(): RenderEngineUpdateCallBack | undefined {
    return this._updateCallback;
  }

  set updateCallBack(cb: SceneManagerUpdateCallBack) {
    this._updateCallback = (env: UpdateEnvironment, ...args: any[]) => {
      return cb(this, env, ...args);
    };
  }
}
