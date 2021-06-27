import { Canvas, useLoader } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Physics, usePlane, useConvexPolyhedron } from '@react-three/cannon'
import { Geometry } from 'three-stdlib'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Player } from '../objects/complex/AdjustedPlayer'

function Ground() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color='grey' wireframe />
    </mesh>
  )
}

function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry)
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices()
  // TODO Do this with WASM?
  // TODO Get rid of console warnings and errors
  return [
    geo.vertices.map(v => [v.x, v.y, v.z]),
    geo.faces.map(f => [f.a, f.b, f.c]),
    []
  ]
}

type ForestGroundType = GLTF & {
  nodes: {
    Environment_ground: THREE.Mesh
  }
  materials: {
    x1024: THREE.MeshBasicMaterial
  }
}

function ForestGround(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    '/models/split-forest/Environment_ground.gltf'
  ) as ForestGroundType

  const geo = useMemo(
    () => toConvexProps(nodes.Environment_ground.geometry),
    [nodes]
  )

  // @ts-ignore
  const [ref] = useConvexPolyhedron(() => ({
    mass: 1,
    type: 'Kinematic',
    args: geo,
    position: [-10.51, 0, -48.04]
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Environment_ground.geometry}
        position={[-10.51, 0, -48.04]}
      >
        <meshBasicMaterial color='black' wireframe />
      </mesh>
    </group>
  )
}

type ForestFoliageType = GLTF & {
  nodes: {
    Eibe_Foliage: THREE.Mesh
  }
  materials: {
    phong1: THREE.MeshStandardMaterial
  }
}

function ForestFoliage(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF(
    '/models/split-forest/Eibe_Foliage.gltf'
  ) as ForestFoliageType

  const [colorMap] = useLoader(TextureLoader, [
    '/models/split-forest/Bark_type_1.png'
  ])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Eibe_Foliage.geometry} position={[6.65, 0, -7.01]}>
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </group>
  )
}

export default function ForestMeshCollider() {
  return (
    <>
      <Canvas className='bg-black' camera={{ position: [0, 1, 5] }}>
        <Suspense fallback={null}>
          <Physics gravity={[0, -30, 0]}>
            <ForestGround />
            <ForestFoliage />
            <Player position={[-20, 1, 20]} />
            <Ground />
          </Physics>
        </Suspense>
        <PointerLockControls />
        <Sky sunPosition={[100, 10, 100]} />
      </Canvas>
      <Loader />
    </>
  )
}
