import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { FoliageGrpProps } from '../types/types'

export default function FoliageGrp(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/forest/FoliageGrp.gltf'
  ) as FoliageGrpProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.FoliageGrp001.geometry}
        material={materials.Foliage}
      />
    </group>
  )
}
