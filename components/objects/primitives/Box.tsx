import { useBox } from '@react-three/cannon'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Box() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [4, 4, 4],
    isKinematic: true
  }))
  useFrame(state => {
    const t = state.clock.getElapsedTime()
    api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3)
    api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0)
  })
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach='geometry' args={[4, 4, 4]} />
      <meshLambertMaterial
        attach='material'
        color='white'
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
