import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { LaddersProps } from '../types/types'

export default function Ladders(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/Ladders.gltf') as LaddersProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Leiter_LP_grp1001.geometry}
          material={materials.Leiter1}
        />
      </group>
    </group>
  )
}
