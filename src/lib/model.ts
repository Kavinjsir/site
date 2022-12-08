import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export interface LoadModelOptions {
  receiveShadow: boolean;
  castShadow: boolean;
}

export function loadGLTFModel(
  scene: any,
  glbPath: string,
  options: LoadModelOptions = { receiveShadow: true, castShadow: true },
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;

        obj.name = `model`;
        obj.position.x = 0;
        obj.position.y = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;

        scene.add(obj);

        obj.traverse(function (child) {
          if ((<THREE.Mesh>child).isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      (error) => reject(error),
    );
  });
}
