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
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EnvironmentGround_UV_low001.geometry}
          material={materials.GroundForest}
        />
      </group>
    </group>
  )
}
