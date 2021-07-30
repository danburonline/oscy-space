import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { RocksProps } from '../types/types'

export default function Rocks(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/gorge/WallRocks.gltf') as RocksProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Wall_bottomright001.geometry}
          material={materials.M_Wall_bottomright}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Wall_left001.geometry}
          material={materials.M_Wall_left}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Wall_Right001.geometry}
          material={materials.M_Wall_right}
          scale={[0.01, 0.01, 0.01]}
        />
      </group>
    </group>
  )
}
