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
      <mesh
        castShadow
        geometry={nodes.EibeCremineGrp001.geometry}
        material={materials.Yew_leaves}
      />
      <mesh
        castShadow
        geometry={nodes.EibeCremineGrp002.geometry}
        material={materials.EibeCremine1}
      />
    </group>
  )
}
