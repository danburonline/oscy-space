import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { WallRockProps } from '../types/types'

// TODO Material doesn't work
export default function WallRock(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/WallRock.gltf') as WallRockProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Wall_Rock_grp001.geometry}
          material={materials.Wall_Rock}
        />
      </group>
    </group>
  )
}
