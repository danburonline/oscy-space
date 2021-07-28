import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { RoofWallProps } from '../types/types'

export default function RoofWall(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/WandDach.gltf') as RoofWallProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Dach_Wand1_1.geometry}
        material={materials.Wand_Dach}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  )
}
