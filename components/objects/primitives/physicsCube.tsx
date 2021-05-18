import { Physics, usePlane, useBox } from '@react-three/cannon'

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
    </mesh>
  )
}

function Cube() {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
    </mesh>
  )
}

export default function PhysicsCube() {
  return (
    <Physics>
      <Plane />
      <Cube />
    </Physics>
  )
}
