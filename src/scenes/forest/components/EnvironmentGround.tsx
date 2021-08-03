import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { EnvironmentGroundProps } from '../types/types'

export default function EnvironmentGround(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/forest/EnvironmentGround-transformed.glb'
  ) as EnvironmentGroundProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Environment_ground_UV_low001.geometry}
        material={materials.GroundForest}
      />
    </group>
  )
}
