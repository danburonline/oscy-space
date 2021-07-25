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
      <group
        position={[-76.2, 0, -55.08]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh
          geometry={nodes.FoliageInstancedStaticMeshComponent_5001.geometry}
          material={materials['Foliage.009']}
        />
      </group>
    </group>
  )
}
