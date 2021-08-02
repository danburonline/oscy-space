import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { RoomElementsProps } from '../types/types'

export default function RoomElements(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/gorge/RoomElements.gltf'
  ) as RoomElementsProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.RoomElements001.geometry}
        material={materials.M_Roof}
      />
      <mesh
        geometry={nodes.RoomElements002.geometry}
        material={materials.M_Walls}
      />
    </group>
  )
}
