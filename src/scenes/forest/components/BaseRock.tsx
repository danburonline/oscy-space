import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { BaseRockProps } from '../types/types'

export default function BaseRock(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/forest/BaseRock-transformed.glb'
  ) as BaseRockProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Base_Rock_grp001.geometry}
          material={materials.Base_Rock}
        />
      </group>
    </group>
  )
}
