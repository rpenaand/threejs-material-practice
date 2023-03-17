import Experience from './Experience/Experience';
const experience = new Experience();
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';
// import GUI from 'lil-gui';

// const canvas = document.querySelector('canvas');
// const gui = new GUI();

// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// const debug = {
//   fov: 75,
//   aspect: sizes.width / sizes.height,
// };

// // Add scene
// const scene = new THREE.Scene();

// // Add Sphere
// const geometry = new THREE.SphereGeometry(0.5, 12, 12);
// const material = new THREE.MeshStandardMaterial();
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// // Add light
// const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
// directionalLight.position.set(0.25, 3, -2.25);
// scene.add(directionalLight);

// // Add Camera
// const camera = new THREE.PerspectiveCamera(debug.fov, debug.aspect, 0.01, 500);
// camera.position.z = 3;
// scene.add(camera);

// // Add controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// // Add renderer
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.physicallyCorrectLights = true;

// // Add tick

// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// // Handle resize
// window.addEventListener('resize', () => {
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(sizes.width, sizes.height);
// });

// tick();

// // Add degug gui
// gui.add(debug, 'fov', 1, 100, 1).onChange((val) => {
//   console.log(val);
//   camera.fov = val;
//   console.log(camera.fov);
// });
// gui.add(directionalLight, 'intensity', 0, 5, 0.1).name('lightIntensity');
// gui.add(directionalLight.position, 'x', -5, 5, 0.1).name('lightXPos');
// gui.add(directionalLight.position, 'y', -5, 5, 0.1).name('lightYPos');
// gui.add(directionalLight.position, 'z', -5, 5, 0.1).name('lightZPos');
