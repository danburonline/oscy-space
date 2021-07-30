import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GrassProps } from '../types/types'

export default function Grass(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/gorge/Grass.gltf') as GrassProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Grass_1.geometry} material={materials.M_Grass} />
      <mesh geometry={nodes.Grass_2.geometry} material={materials.M_Grass2} />
    </group>
  )
}
