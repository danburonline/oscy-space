import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { RocksProps } from '../types/types'

export default function Rocks(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/gorge/models/Rocks.gltf') as RocksProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Wall_bottomright_lowpoly001.geometry}
        material={materials['M_Wall_bottomright.002']}
      />
      <mesh
        geometry={nodes.Wall_left_lowpoly001.geometry}
        material={materials['M_Wall_left1.002']}
      />
      <mesh
        geometry={nodes.Wall_Right_lowpoly001.geometry}
        material={materials['M_Wall_right.002']}
      />
    </group>
  )
}
