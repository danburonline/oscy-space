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
        position={[0, -0.35, 0]}
        geometry={nodes.Dach_Wand1001.geometry}
        material={materials.WandDach}
      />
    </group>
  )
}
