import * as THREE from 'three';
import Experience from './Experience';

export default class Renderer {
  experience = new Experience();
  sizes = this.experience.sizes;
  canvas = this.experience.canvas;
  scene = this.experience.scene;
  camera = this.experience.camera;
  constructor() {
    this.setInstance();
  }

  setInstance() {
    this.instance = THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
