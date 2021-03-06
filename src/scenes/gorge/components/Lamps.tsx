import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { LampsProps } from '../types/types'

export default function Lamps(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/gorge/Lamps-transformed.glb'
  ) as LampsProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Lamps001.geometry}
        material={materials['M_Lamps.002']}
      />
    </group>
  )
}
