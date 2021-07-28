import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import type { ColliderProps } from '../types/types'
import { useGLTF } from '@react-three/drei'
import { useConvexPolyhedron } from '@react-three/cannon'
import toConvexProps from '../../../utils/toConvexProps'

export default function Collider(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/forest/EnvironmentPath.gltf') as ColliderProps

  const geo = useMemo(
    () => toConvexProps(nodes.EnvironmentPath.geometry),
    [nodes]
  )

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [ref] = useConvexPolyhedron(() => ({
    mass: 1,
    type: 'Kinematic',
    args: geo,
    rotation: [Math.PI / 2, 0, 0]
  }))

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh ref={ref} geometry={nodes.EnvironmentPath.geometry}>
          <meshBasicMaterial visible={false} />
        </mesh>
      </group>
    </group>
  )
}
