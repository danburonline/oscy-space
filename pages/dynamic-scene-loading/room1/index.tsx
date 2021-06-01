import { useState } from 'react'
import { Sky } from '@react-three/drei'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { Player } from '../components/Player'
import { roomProps, ROOM } from '../types'

function SimplePhysicsCube(props) {
  const [hover, setHover] = useState(false)
  const [ref] = useBox(() => ({ type: 'Static', position: props.position }))

  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onClick={() => props.setSelectedRoom(ROOM.B)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? 'blue' : 'white'} />
    </mesh>
  )
}

function Ground() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color='red' wireframe />
    </mesh>
  )
}

export default function Room1(props: roomProps) {
  return (
    <>
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

      <Physics gravity={[0, -30, 0]}>
        <SimplePhysicsCube
          position={[0, 0.5, 0]}
          setSelectedRoom={props.setSelectedRoom}
        />
        <Ground />
        <Player position={props.playerInitPosition} />
      </Physics>
    </>
  )
}
