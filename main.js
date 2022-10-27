import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Loader } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

//add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 2, 1);
scene.add(directionalLight);

//load texture
const textureLoader = new THREE.TextureLoader();
const brickTexture = textureLoader.load('/textures/brick.jpg');

//add wall1
const wall1Geometry = new THREE.BoxGeometry( 5, 4, 0.5);
const wall1Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
wall1Material.map = brickTexture;
const wall1 = new THREE.Mesh( wall1Geometry, wall1Material );
scene.add(wall1);
wall1.position.z = -5;
wall1.position.y = 2.5;
camera.position.z = 5;

// add wall2
const wall2Geometry = new THREE.BoxGeometry( 0.5, 4, 5);
const wall2Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
wall2Material.map = brickTexture;
const wall2 = new THREE.Mesh( wall2Geometry, wall2Material );
scene.add(wall2);
wall2.position.z = -2.3;
wall2.position.y = 2.5;
wall2.position.x = 2.3;

// add wall3
const wall3Geometry = new THREE.BoxGeometry( 0.5, 4, 5);
const wall3Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
wall3Material.map = brickTexture;
const wall3 = new THREE.Mesh( wall3Geometry, wall3Material );
scene.add(wall3);
wall3.position.z = -2.3;
wall3.position.y = 2.5;
wall3.position.x = -2.3;

// add toren1
const toren1Geometry = new THREE.CylinderGeometry( 2, 2, 7, 32 );
const toren1Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
toren1Material.map = brickTexture;
const toren1 = new THREE.Mesh( toren1Geometry, toren1Material );
scene.add( toren1 );
toren1.position.y = 4;
toren1.position.x = -4.5;
toren1.position.z = -2.5;


// add toren2
const toren2Geometry = new THREE.CylinderGeometry( 2, 2, 7, 32 );
const toren2Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
toren2Material.map = brickTexture;
const toren2 = new THREE.Mesh( toren2Geometry, toren2Material );
scene.add( toren2 );
toren2.position.y = 4;
toren2.position.x = 4.5;
toren2.position.z = -2.5;

// Load texture
const brick2Texture = textureLoader.load('/textures/pinkbrick.jpg');

//add roof1
const roof1Geometry = new THREE.ConeGeometry( 4, 4, 4 );
const roof1Material = new THREE.MeshBasicMaterial( {color: 0xff0099} );
roof1Material.map = brick2Texture;
const roof1 = new THREE.Mesh( roof1Geometry, roof1Material );
scene.add( roof1 );
roof1.position.y = 6.5;
roof1.position.z = -2.5;
roof1.rotateY(Math.PI/4);

//add roof2
const roof2Geometry = new THREE.ConeGeometry( 3, 3, 8 );
const roof2Material = new THREE.MeshBasicMaterial( {color: 0xff0099} );
roof2Material.map = brick2Texture;
const roof2 = new THREE.Mesh( roof2Geometry, roof2Material );
scene.add( roof2 );
roof2.position.y = 9;
roof2.position.z = -2.5;
roof2.position.x = -4.5;


//add roof2
const roof3Geometry = new THREE.ConeGeometry( 3, 3, 8 );
const roof3Material = new THREE.MeshBasicMaterial( {color: 0xff0099} );
roof3Material.map = brick2Texture;
const roof3 = new THREE.Mesh( roof3Geometry, roof3Material );
scene.add( roof3 );
roof3.position.y = 9;
roof3.position.z = -2.5;
roof3.position.x = 4.5;

// add sphere
//load texture
const skyTexture = textureLoader.load('/textures/sky.jpg');
const sphereGeometry = new THREE.SphereGeometry(100, 32, 32);
const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
sphereMaterial.map = skyTexture;
sphereMaterial.side = THREE.BackSide;
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);


// add Flower 
let flower;
const gltfLoader = new GLTFLoader();
gltfLoader.load('/flower/scene.gltf', (gltf) => {
flower = gltf.scene;
gltf.scene.position.set(4,0,2);
scene.add(gltf.scene);
flower.position.y = 0.5;
});

// add Flower 
let flower2;
gltfLoader.load('/flower/scene.gltf', (gltf) => {
flower2 = gltf.scene;
gltf.scene.position.set(-4,0,2);
scene.add(gltf.scene);
flower2.position.y = 0.5;
});


// Load texture
const grassTexture = textureLoader.load('/textures/grass.jpg');
//grass
const grassGeometry = new THREE.BoxGeometry( 20, 1, 20); 
const grassMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
grassMaterial.map = grassTexture;
const grass = new THREE.Mesh( grassGeometry, grassMaterial );
scene.add( grass );

// Load texture
const nameTexture = textureLoader.load('/public/name/name.png');
// add name card
const nameGeometry = new THREE.PlaneGeometry( 4, 3, 32 );
const nameMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
nameMaterial.map = nameTexture;
nameMaterial.material = THREE.DoubleSide;
const name = new THREE.Mesh( nameGeometry, nameMaterial );
scene.add( name );
name.position.y = 2;
name.position.z = -4;




//create clouds
for (let index = 0; index < 10; index++) {
  let x = (Math.random() * 50) - 30;
  let y = 10;
  let z = (Math.random() * 50) - 10;
  const loader = new GLTFLoader();
  gltfLoader.load('/cloud/scene.gltf', (gltf) => {
  const cloud = gltf.scene;
  gltf.scene.position.set(x,y,z);
  scene.add(gltf.scene);
  cloud.scale.set(0.25, 0.25, 0.25);
  cloud.position.x = x;
  cloud.position.y = y;
  cloud.position.z = z;
  this.Group.add( cloud );
  });
}


function animate() {
  requestAnimationFrame( animate );

  flower.rotation.y += 0.01;
  flower2.rotation.y -= 0.01;
  

  renderer.render( scene, camera );
};

animate();