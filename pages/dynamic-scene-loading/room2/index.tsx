import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls } from '@react-three/drei'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { Player } from '../components/Player'

function SimplePhysicsCube(props) {
  const [ref] = useBox(() => ({ type: 'Static', position: props.position }))
  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

function Ground() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color='grey' wireframe />
    </mesh>
  )
}

export default function Room2() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

      <Physics gravity={[0, -30, 0]}>
        <SimplePhysicsCube position={[0, 0.5, 0]} color='blue' />
        <Ground />
        <Player />
      </Physics>
    </>
  )
}
