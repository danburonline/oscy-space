import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { Physics, usePlane, useConvexPolyhedron } from '@react-three/cannon'

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Geometry } from 'three-stdlib'
import { Player } from '../objects/complex/AdjustedPlayer'

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -8, 0]
  }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color='grey' wireframe />
    </mesh>
  )
}

type FinalTaminaProps = GLTF & {
  nodes: {
    Bars_l001: THREE.Mesh
    Bars_r001: THREE.Mesh
    Brace_01001: THREE.Mesh
    Brace_02001: THREE.Mesh
    Brace_03001: THREE.Mesh
    Brace_04001: THREE.Mesh
    Curb_1001: THREE.Mesh
    Curb_2001: THREE.Mesh
    Curb_3001: THREE.Mesh
    Curb_4001: THREE.Mesh
    Door_l001: THREE.Mesh
    Door_lock001: THREE.Mesh
    Door_r001: THREE.Mesh
    DorrHandle001: THREE.Mesh
    Path_gravel001: THREE.Mesh
    Path_gravel1001: THREE.Mesh
    Path_gravel2001: THREE.Mesh
    Path_gravel3001: THREE.Mesh
    Path_gravel4001: THREE.Mesh
    Path_gravel5001: THREE.Mesh
    Path_gravel6001: THREE.Mesh
    Path_gravel7001: THREE.Mesh
    Path_gravel8001: THREE.Mesh
    Path_left001: THREE.Mesh
    Path_right001: THREE.Mesh
    PicketFence1001: THREE.Mesh
    PicketFence2001: THREE.Mesh
    PicketFence3001: THREE.Mesh
    PicketFence4001: THREE.Mesh
    PicketFence5001: THREE.Mesh
    PicketFence6001: THREE.Mesh
    Plank_01001: THREE.Mesh
    Plank_02001: THREE.Mesh
    Plank_03001: THREE.Mesh
    Plank_04001: THREE.Mesh
    Wall_bottomright_lowpoly1001: THREE.Mesh
    Wall_left_lowpoly1001: THREE.Mesh
    Wall_Right_lowpoly1001: THREE.Mesh
  }
  materials: {
    M_TrimSheet_TEST: THREE.MeshStandardMaterial
    M_Wall_bottomright_TEST: THREE.MeshStandardMaterial
    M_Wall_left_TEST: THREE.MeshStandardMaterial
    M_Wall_right_TEST: THREE.MeshStandardMaterial
  }
}

export function FinalTamina(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/final-tamina-draco/Tamina.gltf'
  ) as FinalTaminaProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Bars_l001.geometry}
        material={nodes.Bars_l001.material}
      />
      <mesh
        geometry={nodes.Bars_r001.geometry}
        material={nodes.Bars_r001.material}
      />
      <mesh
        geometry={nodes.Brace_01001.geometry}
        material={nodes.Brace_01001.material}
      />
      <mesh
        geometry={nodes.Brace_02001.geometry}
        material={nodes.Brace_02001.material}
      />
      <mesh
        geometry={nodes.Brace_03001.geometry}
        material={nodes.Brace_03001.material}
      />
      <mesh
        geometry={nodes.Brace_04001.geometry}
        material={nodes.Brace_04001.material}
      />
      <mesh
        geometry={nodes.Curb_1001.geometry}
        material={nodes.Curb_1001.material}
      />
      <mesh
        geometry={nodes.Curb_2001.geometry}
        material={nodes.Curb_2001.material}
      />
      <mesh
        geometry={nodes.Curb_3001.geometry}
        material={nodes.Curb_3001.material}
      />
      <mesh
        geometry={nodes.Curb_4001.geometry}
        material={nodes.Curb_4001.material}
      />
      <mesh
        geometry={nodes.Door_l001.geometry}
        material={nodes.Door_l001.material}
      />
      <mesh
        geometry={nodes.Door_lock001.geometry}
        material={nodes.Door_lock001.material}
      />
      <mesh
        geometry={nodes.Door_r001.geometry}
        material={nodes.Door_r001.material}
      />
      <mesh
        geometry={nodes.DorrHandle001.geometry}
        material={nodes.DorrHandle001.material}
      />
      <mesh
        geometry={nodes.Path_gravel001.geometry}
        material={nodes.Path_gravel001.material}
      />
      <mesh
        geometry={nodes.Path_gravel1001.geometry}
        material={nodes.Path_gravel1001.material}
      />
      <mesh
        geometry={nodes.Path_gravel2001.geometry}
        material={nodes.Path_gravel2001.material}
      />
      <mesh
        geometry={nodes.Path_gravel3001.geometry}
        material={nodes.Path_gravel3001.material}
      />
      <mesh
        geometry={nodes.Path_gravel4001.geometry}
        material={nodes.Path_gravel4001.material}
      />
      <mesh
        geometry={nodes.Path_gravel5001.geometry}
        material={nodes.Path_gravel5001.material}
      />
      <mesh
        geometry={nodes.Path_gravel6001.geometry}
        material={nodes.Path_gravel6001.material}
      />
      <mesh
        geometry={nodes.Path_gravel7001.geometry}
        material={nodes.Path_gravel7001.material}
      />
      <mesh
        geometry={nodes.Path_gravel8001.geometry}
        material={nodes.Path_gravel8001.material}
      />
      <mesh
        geometry={nodes.Path_left001.geometry}
        material={nodes.Path_left001.material}
      />
      <mesh
        geometry={nodes.Path_right001.geometry}
        material={nodes.Path_right001.material}
      />
      <mesh
        geometry={nodes.PicketFence1001.geometry}
        material={nodes.PicketFence1001.material}
      />
      <mesh
        geometry={nodes.PicketFence2001.geometry}
        material={nodes.PicketFence2001.material}
      />
      <mesh
        geometry={nodes.PicketFence3001.geometry}
        material={nodes.PicketFence3001.material}
      />
      <mesh
        geometry={nodes.PicketFence4001.geometry}
        material={nodes.PicketFence4001.material}
      />
      <mesh
        geometry={nodes.PicketFence5001.geometry}
        material={nodes.PicketFence5001.material}
      />
      <mesh
        geometry={nodes.PicketFence6001.geometry}
        material={nodes.PicketFence6001.material}
      />
      <mesh
        geometry={nodes.Plank_01001.geometry}
        material={nodes.Plank_01001.material}
      />
      <mesh
        geometry={nodes.Plank_02001.geometry}
        material={nodes.Plank_02001.material}
      />
      <mesh
        geometry={nodes.Plank_03001.geometry}
        material={nodes.Plank_03001.material}
      />
      <mesh
        geometry={nodes.Plank_04001.geometry}
        material={nodes.Plank_04001.material}
      />
      <mesh
        geometry={nodes.Wall_bottomright_lowpoly1001.geometry}
        material={materials.M_Wall_bottomright_TEST}
      />
      <mesh
        geometry={nodes.Wall_left_lowpoly1001.geometry}
        material={materials.M_Wall_left_TEST}
      />
      <mesh
        geometry={nodes.Wall_Right_lowpoly1001.geometry}
        material={materials.M_Wall_right_TEST}
      />
    </group>
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

type ColliderProps = GLTF & {
  nodes: {
    Collider: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

export function Collider(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/final-tamina-draco/Collider_v2.gltf'
  ) as ColliderProps

  const geo = useMemo(() => toConvexProps(nodes.Collider.geometry), [nodes])

  // @ts-ignore
  const [ref] = useConvexPolyhedron(() => ({
    mass: 100,
    type: 'Kinematic',
    args: geo,
    position: [0, -14, 0]
  }))

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Collider.geometry}
        material={materials.lambert1}
      >
        <meshBasicMaterial color={'black'} wireframe={true} />
      </mesh>
    </group>
  )
}

export default function FinalTaminaScene() {
  return (
    <>
      <Canvas className='bg-black' camera={{ position: [11, -7, 36] }}>
        <Suspense fallback={null}>
          <Physics allowSleep={true} gravity={[0, -30, 0]}>
            <FinalTamina position={[0, -14, 0]} />
            <Collider />
            <Player position={[7.5, -7, 0]} />
            <Ground />
          </Physics>
        </Suspense>
        <ambientLight intensity={1} />
        <PointerLockControls selector='#pointerLockButton' />
        <Sky sunPosition={[100, 10, 100]} />
      </Canvas>
      <Loader />
    </>
  )
}
