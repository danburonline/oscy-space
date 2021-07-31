import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { BeechesProps } from '../types/types'

export default function Beeches(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/forest/Beeches.gltf') as BeechesProps
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Beeches_grp_Beech_Leaves_L448001.geometry}
          material={materials['Beech_Leaves_L1.001']}
          material-side={THREE.DoubleSide}
        />
        <mesh
          geometry={nodes.Beeches_grp_Beech_Leaves_L448002.geometry}
          material={materials.M_Baum}
          castShadow
        />
      </group>
    </group>
  )
}
