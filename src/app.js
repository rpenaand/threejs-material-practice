import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import gsap from 'gsap';
import GUI from 'lil-gui';

const gui = new GUI();

const canvas = document.querySelector('.webgl');

// Load textures
const textureLoader = new Three.TextureLoader();

// const cubeTextureLoader = new Three.CubeTextureLoader();

const texture = textureLoader.load(
  '/textures/japanese_stone_wall_diff_1k.webp'
);
const aoTexture = textureLoader.load(
  '/textures/japanese_stone_wall_ao_1k.webp'
);
const displacementTexture = textureLoader.load(
  '/textures/japanese_stone_wall_disp_1k.webp'
);
const normalTexture = textureLoader.load(
  '/textures/japanese_stone_wall_nor_gl_1k.webp'
);

console.log(texture);

// const envMapTexture = cubeTextureLoader.load([
//   'env-map.webp',
//   'env-map.webp',
//   'env-map.webp',
//   'env-map.webp',
//   'env-map.webp',
//   'env-map.webp',
// ]);

// Add Scene

const scene = new Three.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const fov = 75;
const aspectRatio = sizes.width / sizes.height;

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Add Helper
const helper = new Three.AxesHelper();
scene.add(helper);

// Add Object

const geometry = new Three.BoxGeometry(1, 1, 1, 64, 64);
const material = new Three.MeshStandardMaterial();
material.metalness = 0.1;
material.roughness = 0.9;
// material.map = texture;
// material.aoMap = aoTexture;
// material.displacementMap = displacementTexture;
// material.displacementScale = 0.05;
// material.normalMap = normalTexture;
// material.normalScale.set(0.1, 0.1);

// const mesh = new Three.Mesh(geometry, material);
// mesh.geometry.setAttribute(
//   'uv2',
//   new Three.BufferAttribute(mesh.geometry.attributes.uv.array, 2)
// );
// scene.add(mesh);

const sphereGeometry = new Three.SphereGeometry(0.5, 64, 64);

// const planeGeometry = new Three.PlaneGeometry(1, 1, 100, 100);
// const plane = new Three.Mesh(planeGeometry, material);
// plane.position.x = 3;
// plane.geometry.setAttribute(
//   'uv2',
//   new Three.BufferAttribute(plane.geometry.attributes.uv.array, 2)
// );

for (let i = 0; i < 100; i++) {
  const sphere = new Three.Mesh(sphereGeometry, material);
  sphere.geometry.setAttribute(
    'uv2',
    new Three.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
  );
  sphere.position.x = (Math.random() - 0.5) * 20;
  sphere.position.y = (Math.random() - 0.5) * 20;
  sphere.position.z = (Math.random() - 0.5) * 20;
  const scale = Math.random();
  sphere.scale.set(scale, scale, scale);
  scene.add(sphere);
}

// Load Fonts
const fontLoader = new FontLoader();
fontLoader.load('/fonts/Epilogue_Regular.json', function (font) {
  const textGeometry = new TextGeometry('Learning Three.js', {
    font: font,
    size: 0.5,
    height: 0.2,
    curveSegments: 4,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  textGeometry.center();
  const text = new Three.Mesh(textGeometry, material);
  text.position.y = 2;
  scene.add(text);
});

// Add light

const ambientLight = new Three.AmbientLight('white', 0.5);

const pointLight = new Three.PointLight('white', 1);
pointLight.position.x = 2;
pointLight.position.y = 10;
pointLight.position.z = 4;
scene.add(pointLight, ambientLight);

// Add Camera
const camera = new Three.PerspectiveCamera(fov, aspectRatio);
camera.position.z = 3;
// camera.lookAt(sphere);
scene.add(camera);

// Add Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Add renderer
const renderer = new Three.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

const clock = new Three.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // mesh.rotation.y = 0.2 * elapsedTime;
  // sphere.rotation.y = 0.2 * elapsedTime;
  // plane.rotation.y = 0.2 * elapsedTime;

  // mesh.rotation.x = 0.2 * elapsedTime;
  // sphere.rotation.x = 0.2 * elapsedTime;
  // plane.rotation.x = 0.2 * elapsedTime;

  controls.update();
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

// Add Gui Controls

// gui.add(mesh.position, 'x').name('x-position').min(-3).max(3).step(0.1);
// gui.add(mesh, 'visible');
gui.add(material, 'wireframe');
gui.add(material, 'metalness', 0, 1, 0.1);
gui.add(material, 'roughness', 0, 1, 0.1);
gui.add(material, 'aoMapIntensity', 0, 10, 0.1);
gui.add(material, 'displacementScale', 0, 10, 0.1);
gui.add(material.normalScale, 'x', 0, 10, 0.1);
gui.add(material.normalScale, 'y', 0, 10, 0.1);
gui.addColor(material, 'color');
