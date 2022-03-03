import React, { Suspense, useLayoutEffect, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import {
  Environment,
  Stage,
  OrbitControls,
  Loader,
  useGLTF,
  Html,
} from '@react-three/drei';
import * as THREE from 'three';
import { Scene } from 'three';

const Model = () => {
  const { scene } = useGLTF('/scene.gltf');

  useLayoutEffect(() => {
    Object.assign({
      roughness: 0,
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: '#fff',
      envMapIntensity: 0.5,
    });
  }, [scene]);

  return <primitive object={scene} />;
};

const store = [
  {
    name: 'outside',
    color: 'lightpink',
    position: [10, 0, -15],
    url: '/office-life-three.jpg',
    link: 0,
  },
];

const RenderThree = () => {
  const Panorama = () => {
    const map = useLoader(THREE.TextureLoader, store[0].url) // prettier-ignore

    return (
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={map} side={THREE.BackSide} />
      </mesh>
    );
  };

  const Preload = () => {
    const { gl } = useThree();
    const map = useLoader(THREE.TextureLoader, store[0].url) // prettier-ignore
    useEffect(() => gl.initTexture(map), [map]);
    return null;
  };

  return (
    <Canvas frameloop='demand' camera={{ position: [0, 0, 0.5] }}>
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <Preload />
        <Panorama />
        <Model />
      </Suspense>
      <ambientLight intensity={0.6} />
      <OrbitControls enableZoom />
    </Canvas>
  );
};

export default RenderThree;
