import { Canvas } from '@react-three/fiber'
import { FlyControls, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    polySurface6: THREE.Mesh
    polySurface3: THREE.Mesh
    Floor: THREE.Mesh
    Wall_Right: THREE.Mesh
    Wall_Left: THREE.Mesh
    WoodPlanks1: THREE.Mesh
    Bridge: THREE.Mesh
    Gittertuer: THREE.Mesh
  }
  materials: {
    lambert5: THREE.MeshStandardMaterial
    lambert6: THREE.MeshStandardMaterial
    lambert1: THREE.MeshStandardMaterial
    lambert4: THREE.MeshStandardMaterial
    lambert7: THREE.MeshStandardMaterial
  }
}

function TaminaDraco(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/Tamina_Draco_Textures.gltf'
  ) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface6.geometry}
        material={nodes.polySurface6.material}
      />
      <mesh
        geometry={nodes.polySurface3.geometry}
        material={materials.lambert6}
      />
      <mesh geometry={nodes.Floor.geometry} material={nodes.Floor.material} />
      <mesh
        geometry={nodes.Wall_Right.geometry}
        material={nodes.Wall_Right.material}
      />
      <mesh geometry={nodes.Wall_Left.geometry} material={materials.lambert4} />
      <mesh
        geometry={nodes.WoodPlanks1.geometry}
        material={materials.lambert7}
      />
      <mesh geometry={nodes.Bridge.geometry} material={nodes.Bridge.material} />
      <mesh
        geometry={nodes.Gittertuer.geometry}
        material={nodes.Gittertuer.material}
      />
    </group>
  )
}

export default function TaminaDracoScene() {
  return (
    <Canvas className='bg-black'>
      <Suspense fallback={null}>
        <Environment preset='forest' background />
        <TaminaDraco />
      </Suspense>
      <FlyControls dragToLook={true} movementSpeed={300.0} rollSpeed={0.005} />
      <OrbitControls />
    </Canvas>
  )
}
