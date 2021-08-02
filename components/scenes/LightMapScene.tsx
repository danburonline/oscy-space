// @ts-nocheck
import { useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader, useTexture } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { Physics, useConvexPolyhedron } from '@react-three/cannon'
import { Geometry } from 'three-stdlib'
import AmbientSoundObject from '../objects/sound/AmbientSoundObject'
import AudioButton from '../atoms/AudioButton'
import AmbientStereo from '../../components/objects/sound/AmbientStereo'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Player } from '../objects/complex/AdjustedPlayer'

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

const soundObjects = [
  {
    id: 1,
    x: 10,
    y: 10,
    z: -10,
    position: [10, 0, 10],
    filePath: './sounds/lightmap-scene/end_proof_of_concept.mp3',
    name: 'a',
    rotation: 0
  },
  {
    id: 2,
    x: 10,
    y: 15,
    z: 15,
    position: [10, 0, 10],
    filePath: './sounds/lightmap-scene/end_proof_of_concept_1.mp3',
    name: 'b',
    rotation: Math.PI
  },
  ,
  {
    id: 3,
    x: 10,
    y: 10,
    z: -15,
    position: [10, 10, 10],
    filePath: './sounds/lightmap-scene/end_proof_of_concept_2.mp3',
    name: 'c',
    rotation: 0
  },
  ,
  {
    id: 4,
    x: 10,
    y: 10,
    z: 10,
    position: [10, 10, 10],
    filePath: './sounds/lightmap-scene/end_proof_of_concept_3.mp3',
    name: 'd',
    rotation: Math.PI
  }
]

type ForestGroundType = GLTF & {
  nodes: {
    Environment_ground: THREE.Mesh
  }
  materials: {
    x1024: THREE.MeshBasicMaterial
  }
}

function ForestGround(props: JSX.IntrinsicElements['group']) {
  const texture = useTexture('/models/lightmap-forest/terrain-texture.png')

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
        <meshStandardMaterial map={texture} wireframe={true} />
      </mesh>
    </group>
  )
}

type ForestFoliageWithTextureProps = GLTF & {
  nodes: {
    Eibe_Foliage_grp: THREE.Mesh
  }
  materials: {
    phong1: THREE.MeshBasicMaterial
  }
}

export function ForestFoliageWithTexture(
  props: JSX.IntrinsicElements['group']
) {
  const texture = useTexture('/models/lightmap-forest/Bark_type_1.png')
  const lightMap = useTexture('/models/lightmap-forest/tree-lightmap.png')

  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF(
    '/models/lightmap-forest/Eibe_Foliage_grp.gltf'
  ) as ForestFoliageWithTextureProps

  lightMap.flipY = false
  texture.flipY = false

  const uv1Array = nodes.Eibe_Foliage_grp.geometry.getAttribute('uv').array
  const uv2Array = nodes.Eibe_Foliage_grp.geometry.getAttribute('uv2').array

  console.log('UV1: ' + uv1Array)
  console.log('UV2: ' + uv2Array)

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Eibe_Foliage_grp.geometry}
        position={[9.71, 0, 13.47]}
      >
        <meshStandardMaterial
          map={texture}
          lightMap={lightMap}
          lightMapIntensity={100}
        />
      </mesh>
    </group>
  )
}

export default function ForestMeshCollider() {
  const [audioState, setAudioState] = useState(false)

  return (
    <>
      <Canvas className='bg-black' camera={{ position: [0, 1, 5] }}>
        <Suspense fallback={null}>
          <Physics gravity={[0, -30, 0]} allowSleep={true}>
            <ForestGround />
            <ForestFoliageWithTexture />
            <Player position={[0, 1, 0]} />
          </Physics>
        </Suspense>
        <ambientLight intensity={1} />
        <PointerLockControls />
        <Sky sunPosition={[100, 10, 100]} />
        <AmbientSoundObject soundObjects={soundObjects} state={audioState} />
      </Canvas>
      <AudioButton
        state={audioState}
        onClick={() => setAudioState(!audioState)}
      />
      <AmbientStereo state={audioState} />
      <Loader />
    </>
  )
}
