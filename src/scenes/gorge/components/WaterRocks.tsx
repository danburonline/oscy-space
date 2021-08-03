import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { WaterRocksProps } from '../types/types'

export default function WaterRocks(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/forest/BaseRocks-transformed.glb'
  ) as WaterRocksProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.BaseRocks001.geometry}
        material={materials.M_BaseRockElias}
      />
    </group>
  )
}
