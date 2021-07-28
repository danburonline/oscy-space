import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { EibeProps } from '../types/types'

export default function Eibe(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/EibeCremine.gltf') as EibeProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={[0.01, 0.01, 0.01]}>
          <mesh
            geometry={nodes.EibeCremineGRP001.geometry}
            material={materials.Yew_leaves}
          />
          <mesh
            geometry={nodes.EibeCremineGRP002.geometry}
            material={materials.EibeCremine2}
          />
        </group>
      </group>
    </group>
  )
}
