import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RoofWallProps } from '../types/types'

export default function RoofWall(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/WandDach.gltf') as RoofWallProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Dach_Wand1001.geometry}
        material={materials.WandDach}
      />
    </group>
  )
}
