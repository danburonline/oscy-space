import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { StorageAssetsProps } from '../types/types'

export default function StorageAssets(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/StorageAssets.gltf'
  ) as StorageAssetsProps
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Storage_Assets001.geometry}
        material={materials['M_CratesBarrels.001']}
      />
      <mesh
        geometry={nodes.Storage_Assets002.geometry}
        material={materials['M_Props.001']}
      />
    </group>
  )
}
