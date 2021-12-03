import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as THREE from "three";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

import SceneManager from "../SceneManager";
import RenderEngine from "../RenderEngine";

import { GlitchShader } from "./GlitchShader";

export default class SolarSystem {
  private _root?: THREE.Object3D;
  private _composer?: EffectComposer;
  private _mixer?: THREE.AnimationMixer;
  private _action?: THREE.AnimationAction;

  constructor() {}

  get oneDaySimulationTime(): number {
    return 360000;
  }

  get oneHourSimulationTime(): number {
    return 15000;
  }

  get root(): THREE.Object3D | undefined {
    return this._root;
  }

  get sun(): THREE.Object3D | undefined {
    return this._root?.getObjectByName("sun");
  }

  get composer(): EffectComposer | undefined {
    return this._composer;
  }
  get mixer(): THREE.AnimationMixer | undefined {
    return this._mixer;
  }
  get action(): THREE.AnimationAction | undefined {
    return this._action;
  }

  private addBloom(engine: RenderEngine) {
    if (!this._composer) {
      throw new Error("SolarSystem.composer is undefined");
    }

    const bloomPass = new UnrealBloomPass(
      engine.renderer.getSize(new THREE.Vector2(0, 0)),
      1.45,
      1,
      0
    );
    this._composer.addPass(bloomPass);
  }

  private addSunlight(sun: THREE.Object3D) {
    const sunlight = new THREE.PointLight(0xffffff);
    sunlight.scale.set(1.5, 1.5, 1.5);
    sun.parent?.add(sunlight);
  }

  private initSun() {
    const sun = this.sun;
    (window as any).sun = sun;
    if (!sun) {
      return;
    }

    this.addSunlight(sun);
    sun.scale.set(6.96, 6.96, 6.96);
  }

  async load(sceneMgr: SceneManager, engine: RenderEngine): Promise<GLTF> {
    const loader = new GLTFLoader();
    console.time("load3d");
    return loader
      .loadAsync("/3d/solar-system/scene2.gltf", (xhr: ProgressEvent) => {})
      .then(async (gltf: GLTF): Promise<GLTF> => {
        this._root = gltf.scene.getObjectByName("sun");
        if (!this._root) {
          return gltf;
        }

        const glitchPass = new ShaderPass(GlitchShader);
        engine.renderer.getSize(glitchPass.uniforms.iResolution.value);
        const renderFunc = glitchPass.render.bind(glitchPass);
        glitchPass.render = (
          renderer: THREE.WebGLRenderer,
          writeBuffer: THREE.WebGLRenderTarget,
          readBuffer: THREE.WebGLRenderTarget,
          deltaTime: number,
          maskActive: boolean
        ) => {
          glitchPass.uniforms.iTime.value += deltaTime;
          renderFunc(renderer, writeBuffer, readBuffer, deltaTime, maskActive);
        };

        sceneMgr.scene.add(this._root);
        this._composer = new EffectComposer(engine.renderer);
        this._composer.addPass(engine.getRenderPass(sceneMgr.scene, sceneMgr.camera));
        this.addBloom(engine);
        this._composer.addPass(glitchPass);
        this._composer.addPass(engine.getFxaaPass());

        engine.renderer.outputEncoding = THREE.sRGBEncoding;

        this.initSun();

        const ambient = new THREE.AmbientLight(0xffffff, 0.25);
        sceneMgr.scene.add(ambient);
        const getChildren = (
          current: THREE.Object3D,
          remaining: THREE.Object3D[],
          result: THREE.Object3D[]
        ): THREE.Object3D[] => {
          result.push(current);
          remaining.push(...current.children);
          const next = remaining.shift();
          if (!next) {
            return result;
          }

          return getChildren(next, remaining, result);
        };

        const spaceTexture = new THREE.TextureLoader().load("/3d/milky-way.jpg");
        spaceTexture.encoding = THREE.sRGBEncoding;
        sceneMgr.scene.background = spaceTexture;

        this._mixer = new THREE.AnimationMixer(this._root);
        this._action = this._mixer.clipAction(gltf.animations[0]);
        this._action.play();

        return gltf;
      });
  }

  update(engine: RenderEngine, deltaTime?: number) {
    this._mixer?.update((deltaTime ?? engine.deltaTime) / 30000);
  }

  render(engine: RenderEngine, deltaTime?: number) {
    this._composer?.render(deltaTime ?? engine.deltaTime);
  }
}
