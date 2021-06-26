import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, OrbitControls, Loader } from '@react-three/drei'
import { Suspense } from 'react'

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type TaminaBlockinModelProps = GLTF & {
  nodes: {
    PicketFence1_1: THREE.Mesh
    PicketFence2_1: THREE.Mesh
    PicketFence3_1: THREE.Mesh
    PicketFence4_1: THREE.Mesh
    PicketFence5_1: THREE.Mesh
    PicketFence6_1: THREE.Mesh
    Curb_1_1: THREE.Mesh
    Curb_2_1: THREE.Mesh
    Curb_3_1: THREE.Mesh
    Curb_4_1: THREE.Mesh
    Path_left_1: THREE.Mesh
    Path_right_1: THREE.Mesh
    Path_gravel_2: THREE.Mesh
    Path_gravel1_1: THREE.Mesh
    Path_gravel2_1: THREE.Mesh
    Path_gravel3_1: THREE.Mesh
    Path_gravel4_1: THREE.Mesh
    Path_gravel5_1: THREE.Mesh
    Path_gravel6_1: THREE.Mesh
    Path_gravel7_1: THREE.Mesh
    Path_gravel8_1: THREE.Mesh
    Plank_01_1: THREE.Mesh
    Plank_02_1: THREE.Mesh
    Plank_03_1: THREE.Mesh
    Plank_04_1: THREE.Mesh
    Brace_01_1: THREE.Mesh
    Brace_02_1: THREE.Mesh
    Brace_03_1: THREE.Mesh
    Brace_04_1: THREE.Mesh
    DorrHandle_1: THREE.Mesh
    Door_lock_1: THREE.Mesh
    Bars_r_1: THREE.Mesh
    Door_r_1: THREE.Mesh
    Door_l_1: THREE.Mesh
    Bars_l_1: THREE.Mesh
    Frame_1: THREE.Mesh
    Wall_bottomright_lowpoly1_1: THREE.Mesh
    Wall_Right_lowpoly1_1: THREE.Mesh
    Wall_left_lowpoly1_1: THREE.Mesh
  }
  materials: {
    M_TrimSheet_TEST: THREE.MeshStandardMaterial
    M_Wall_bottomright_TEST: THREE.MeshStandardMaterial
    M_Wall_right_TEST: THREE.MeshStandardMaterial
    M_Wall_left_TEST: THREE.MeshStandardMaterial
  }
}

export function TaminaBlockinModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/tamina/Unreal_Engine_4.gltf'
  ) as TaminaBlockinModelProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-401.08, -143.89, 282.8]} scale={[0.1, 0.1, 0.1]}>
        <group position={[4363.51, 0, 0]}>
          <mesh
            geometry={nodes.PicketFence1_1.geometry}
            material={nodes.PicketFence1_1.material}
          />
          <group position={[0, 0, -154.58]}>
            <mesh
              geometry={nodes.PicketFence2_1.geometry}
              material={nodes.PicketFence2_1.material}
            />
          </group>
          <group position={[38.15, 0, -335.4]} rotation={[0, -0.05, 0]}>
            <mesh
              geometry={nodes.PicketFence3_1.geometry}
              material={nodes.PicketFence3_1.material}
            />
          </group>
          <group position={[-29.93, 0, -435.17]} rotation={[0, 0.05, 0]}>
            <mesh
              geometry={nodes.PicketFence4_1.geometry}
              material={nodes.PicketFence4_1.material}
            />
          </group>
          <group position={[-122.59, 0, -511.9]} rotation={[0, 0.16, 0]}>
            <mesh
              geometry={nodes.PicketFence5_1.geometry}
              material={nodes.PicketFence5_1.material}
            />
          </group>
          <group position={[-205.81, 0, -599.57]} rotation={[0, 0.25, 0]}>
            <mesh
              geometry={nodes.PicketFence6_1.geometry}
              material={nodes.PicketFence6_1.material}
            />
          </group>
        </group>
        <group position={[4363.51, 0, 0]}>
          <mesh
            geometry={nodes.Curb_1_1.geometry}
            material={nodes.Curb_1_1.material}
          />
          <mesh
            geometry={nodes.Curb_2_1.geometry}
            material={nodes.Curb_2_1.material}
          />
          <mesh
            geometry={nodes.Curb_3_1.geometry}
            material={nodes.Curb_3_1.material}
          />
          <group position={[211.48, 13.51, -668.72]} rotation={[0, 0.12, 0]}>
            <mesh
              geometry={nodes.Curb_4_1.geometry}
              material={nodes.Curb_4_1.material}
            />
          </group>
          <group position={[0, -77.92, 0]}>
            <mesh
              geometry={nodes.Path_left_1.geometry}
              material={nodes.Path_left_1.material}
            />
          </group>
          <mesh
            geometry={nodes.Path_right_1.geometry}
            material={nodes.Path_right_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel_2.geometry}
            material={nodes.Path_gravel_2.material}
          />
          <mesh
            geometry={nodes.Path_gravel1_1.geometry}
            material={nodes.Path_gravel1_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel2_1.geometry}
            material={nodes.Path_gravel2_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel3_1.geometry}
            material={nodes.Path_gravel3_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel4_1.geometry}
            material={nodes.Path_gravel4_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel5_1.geometry}
            material={nodes.Path_gravel5_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel6_1.geometry}
            material={nodes.Path_gravel6_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel7_1.geometry}
            material={nodes.Path_gravel7_1.material}
          />
          <mesh
            geometry={nodes.Path_gravel8_1.geometry}
            material={nodes.Path_gravel8_1.material}
          />
          <mesh
            geometry={nodes.Plank_01_1.geometry}
            material={nodes.Plank_01_1.material}
          />
          <mesh
            geometry={nodes.Plank_02_1.geometry}
            material={nodes.Plank_02_1.material}
          />
          <mesh
            geometry={nodes.Plank_03_1.geometry}
            material={nodes.Plank_03_1.material}
          />
          <mesh
            geometry={nodes.Plank_04_1.geometry}
            material={nodes.Plank_04_1.material}
          />
          <mesh
            geometry={nodes.Brace_01_1.geometry}
            material={nodes.Brace_01_1.material}
          />
          <mesh
            geometry={nodes.Brace_02_1.geometry}
            material={nodes.Brace_02_1.material}
          />
          <mesh
            geometry={nodes.Brace_03_1.geometry}
            material={nodes.Brace_03_1.material}
          />
          <mesh
            geometry={nodes.Brace_04_1.geometry}
            material={nodes.Brace_04_1.material}
          />
        </group>
        <group position={[521.21, 0, -4268.58]} rotation={[0, -1.23, 0]}>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.DorrHandle_1.geometry}
              material={nodes.DorrHandle_1.material}
            />
          </group>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.Door_lock_1.geometry}
              material={nodes.Door_lock_1.material}
            />
          </group>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.Bars_r_1.geometry}
              material={nodes.Bars_r_1.material}
            />
          </group>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.Door_r_1.geometry}
              material={nodes.Door_r_1.material}
            />
          </group>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.Door_l_1.geometry}
              material={nodes.Door_l_1.material}
            />
          </group>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.Bars_l_1.geometry}
              material={nodes.Bars_l_1.material}
            />
          </group>
          <group rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.Frame_1.geometry}
              material={nodes.Frame_1.material}
            />
          </group>
        </group>
        <group position={[4363.51, 0, 0]}>
          <mesh
            geometry={nodes.Wall_bottomright_lowpoly1_1.geometry}
            material={materials.M_Wall_bottomright_TEST}
          />
        </group>
        <group position={[4363.51, 0, 0]}>
          <mesh
            geometry={nodes.Wall_Right_lowpoly1_1.geometry}
            material={materials.M_Wall_right_TEST}
          />
        </group>
        <group position={[4363.51, 0, 0]}>
          <mesh
            geometry={nodes.Wall_left_lowpoly1_1.geometry}
            material={materials.M_Wall_left_TEST}
          />
        </group>
      </group>
    </group>
  )
}

export default function ForestMeshCollider() {
  return (
    <>
      <Canvas className='bg-black'>
        <Suspense fallback={null}>
          {/* <Physics gravity={[0, -30, 0]}> */}
          <TaminaBlockinModel />
          {/* <Player position={[0, 1, 0]} /> */}
          {/* </Physics> */}
        </Suspense>
        <ambientLight intensity={1} />
        <OrbitControls />
        <Sky sunPosition={[100, 10, 100]} />
      </Canvas>
      <Loader />
    </>
  )
}
