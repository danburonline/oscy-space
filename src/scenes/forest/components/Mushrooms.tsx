import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { MushroomProps } from '../types/types'

export default function Mushrooms(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/Pilze.gltf') as MushroomProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Pilze001.geometry}
        material={materials.PilzeMaterial}
      />
    </group>
  )
}
