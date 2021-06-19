import { Canvas, useLoader } from '@react-three/fiber'
import { Sky, PointerLockControls, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

function ForestGround(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/models/split-forest/Environment_ground.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        // @ts-ignore
        geometry={nodes.Environment_ground.geometry}
        position={[-10.51, 0, -48.04]}
      >
        <meshBasicMaterial color='black' wireframe />
      </mesh>
    </group>
  )
}

function ForestFoliage(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/models/split-forest/Eibe_Foliage.gltf')

  const [colorMap] = useLoader(TextureLoader, [
    '/models/split-forest/Bark_type_1.png'
  ])

  return (
    <group ref={group} {...props} dispose={null}>
      {/* @ts-ignore */}
      <mesh geometry={nodes.Eibe_Foliage.geometry} position={[6.65, 0, -7.01]}>
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </group>
  )
}

export default function ForestMeshCollider() {
  return (
    <Canvas className='bg-black' camera={{ position: [0, 1, 5] }}>
      <Suspense fallback={null}>
        <ForestGround />
        <ForestFoliage />
      </Suspense>
      {/* <PointerLockControls /> */}
      <Sky sunPosition={[100, 10, 100]} />
      <OrbitControls />
    </Canvas>
  )
}
