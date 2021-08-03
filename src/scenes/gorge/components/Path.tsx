import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { PathProps } from '../types/types'

export default function Path(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/gorge/Path-transformed.glb') as PathProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Path_1.geometry} material={nodes.Path_1.material} />
      <mesh geometry={nodes.Path_2.geometry} material={nodes.Path_2.material} />
      <mesh geometry={nodes.Path_3.geometry} material={nodes.Path_3.material} />
    </group>
  )
}
