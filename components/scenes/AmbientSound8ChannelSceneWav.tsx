// @ts-nocheck
import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Player } from '../objects/complex/DynamicPlayer'
import AmbientSoundObject from '../objects/sound/AmbientSoundObject'
import AudioButton from '../atoms/AudioButton'
import { useState } from 'react'

const soundObjects = [
  {
    id: 1,
    x: 10,
    y: 0,
    z: -10,
    position: [10, 0, -10],
    filePath: 'https://storage.googleapis.com/oscy-cdn/proof_of_concept/r.wav',
    name: 'r',
    rotation: 0
  },
  {
    id: 2,
    x: 10,
    y: 0,
    z: 10,
    position: [10, 0, 10],
    filePath: 'https://storage.googleapis.com/oscy-cdn/proof_of_concept/rs.wav',
    name: 'rs',
    rotation: Math.PI
  },
  ,
  {
    id: 3,
    x: 10,
    y: 10,
    z: -10,
    position: [10, 10, -10],
    filePath: 'https://storage.googleapis.com/oscy-cdn/proof_of_concept/hr.wav',
    name: 'hr',
    rotation: 0
  },
  ,
  {
    id: 4,
    x: 10,
    y: 10,
    z: 10,
    position: [10, 10, 10],
    filePath:
      'https://storage.googleapis.com/oscy-cdn/proof_of_concept/hrs.wav',
    name: 'hrs',
    rotation: Math.PI
  },
  ,
  {
    id: 5,
    x: -10,
    y: 0,
    z: -10,
    position: [-10, 0, -10],
    filePath: 'https://storage.googleapis.com/oscy-cdn/proof_of_concept/l.wav',
    name: 'l',
    rotation: 0
  },
  ,
  {
    id: 6,
    x: -10,
    y: 0,
    z: 10,
    position: [-10, 0, 10],
    filePath: 'https://storage.googleapis.com/oscy-cdn/proof_of_concept/ls.wav',
    name: 'ls',
    rotation: Math.PI
  },
  ,
  {
    id: 7,
    x: -10,
    y: 10,
    z: -10,
    position: [-10, 10, -10],
    filePath: 'https://storage.googleapis.com/oscy-cdn/proof_of_concept/hl.wav',
    name: 'hl',
    rotation: 0
  },
  {
    id: 8,
    x: -10,
    y: 10,
    z: 10,
    position: [-10, 10, 10],
    filePath:
      'https://storage.googleapis.com/oscy-cdn/proof_of_concept/hls.wav',
    name: 'hls',
    rotation: Math.PI
  }
]

function Ground() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color='grey' wireframe />
    </mesh>
  )
}

export default function FpvExample() {
  const [audioState, setAudioState] = useState(false)

  return (
    <>
      <Canvas camera={{ position: [0, 1, 5] }} className='bg-black'>
        <PointerLockControls />
        <Sky sunPosition={[100, 10, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

        <Physics gravity={[0, -30, 0]}>
          <Ground />
          <Player position={[0, 1, 0]} />
        </Physics>
        <AmbientSoundObject soundObjects={soundObjects} state={audioState} />
      </Canvas>
      <AudioButton
        state={audioState}
        onClick={() => setAudioState(!audioState)}
      />
      <Loader />
    </>
  )
}
