import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { DoorProps } from '../types/types'

export default function Door(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/Door.gltf') as DoorProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          position={[0, 0, 0.1]}
          geometry={nodes.Door001.geometry}
          material={materials.DoorMaterial}
        />
      </group>
    </group>
  )
}
