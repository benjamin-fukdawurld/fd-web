import * as THREE from "three";

import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";

import {
  RendererOptions,
  IRenderEngine,
  RenderEngineState,
  RenderEngineUpdateCallBack,
} from "./interfaces";

export default class RenderEngine implements IRenderEngine {
  private _renderer: THREE.WebGLRenderer;
  private _container: HTMLDivElement;
  private _state: RenderEngineState;
  private _lastUpdate: number;
  private _deltaTime: number;

  constructor(options: RendererOptions) {
    this._container = options.container;
    this._renderer = new THREE.WebGLRenderer({
      antialias: true,
      stencil: false,
      logarithmicDepthBuffer: true,
      powerPreference: "high-performance",
    });
    this.renderer.sortObjects = false;
    this._state = RenderEngineState.NotInitialized;

    this._lastUpdate = 0;
    this._deltaTime = 0;
  }

  public get lastUpdate(): number {
    return this._lastUpdate;
  }

  private set lastUpdate(value: number) {
    this._lastUpdate = value >= 0 ? value : Date.now();
  }

  public get deltaTime(): number {
    return this._deltaTime;
  }

  private set deltaTime(value: number) {
    this._deltaTime = value >= 0 ? value : Date.now() - this._lastUpdate;
  }

  public get renderer(): THREE.WebGLRenderer {
    return this._renderer;
  }

  public get state(): RenderEngineState {
    return this._state;
  }

  public get container(): HTMLDivElement {
    return this._container;
  }

  public init() {
    this._renderer.setSize(this._container.offsetWidth, this._container.offsetHeight);
    this.container.appendChild(this._renderer.domElement);
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.outputEncoding = THREE.sRGBEncoding;
    this._state = RenderEngineState.Stopped;
  }

  public render(obj: THREE.Object3D, camera: THREE.Camera) {
    this._renderer.render(obj, camera);
  }

  public getRenderPass(scene: THREE.Scene, camera: THREE.Camera) {
    return new RenderPass(scene, camera);
  }

  public get pixelRatio(): number {
    return this._renderer.getPixelRatio();
  }

  public get size(): THREE.Vector2 {
    return new THREE.Vector2(this._container.offsetWidth, this._container.offsetHeight);
  }

  public get resolution(): THREE.Vector2 {
    return this.size.multiplyScalar(this.pixelRatio);
  }

  public getFxaaPass(): ShaderPass {
    const fxaaPass = new ShaderPass(FXAAShader);

    const resolution = this.resolution;

    fxaaPass.material.uniforms["resolution"].value.x = 1 / resolution.x;
    fxaaPass.material.uniforms["resolution"].value.y = 1 / resolution.y;

    return fxaaPass;
  }

  public getCopyPass(): ShaderPass {
    return new ShaderPass(CopyShader);
  }

  start(cb: RenderEngineUpdateCallBack, ...args: any[]): void {
    if (this._state === RenderEngineState.NotInitialized) {
      throw new Error("Engine has not been initialized");
    }

    this._state = RenderEngineState.Running;
    this.lastUpdate = 0;
    this.deltaTime = 0;
    const animationLoop = async () => {
      if (this.state !== RenderEngineState.Running) {
        return;
      }

      if (this.lastUpdate) {
        this.deltaTime = -1;
        // 60 FPS max
        if (this.deltaTime < 16) {
          requestAnimationFrame(animationLoop);
          return;
        }
      }

      if (!cb({ engine: this }, ...args)) {
        this.stop();
        return;
      }

      this.lastUpdate = -1;
      requestAnimationFrame(animationLoop);
    };

    animationLoop();
  }

  stop() {
    this._state = RenderEngineState.Stopped;
  }
}
