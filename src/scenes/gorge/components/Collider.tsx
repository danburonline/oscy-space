import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { ColliderProps } from '../types/types'

export default function Collider(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/Collider.gltf') as ColliderProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Collider.geometry} />
    </group>
  )
}
