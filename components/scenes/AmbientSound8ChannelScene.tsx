import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Player } from '../objects/complex/DynamicPlayer'
import AmbientSoundObject from '../objects/sound/AmbientSoundObject'

const soundObjects = [
  {
    id: 1,
    position: [10, 0, -10],
    filePath: './sounds/ambientSound8Channel/r.mp3'
  },
  {
    id: 2,
    position: [10, 0, 10],
    filePath: './sounds/ambientSound8Channel/rs.mp3'
  },
  ,
  {
    id: 3,
    position: [10, 10, -10],
    filePath: './sounds/ambientSound8Channel/hr.mp3'
  },
  ,
  {
    id: 4,
    position: [10, 10, 10],
    filePath: './sounds/ambientSound8Channel/hrs.mp3'
  },
  ,
  {
    id: 5,
    position: [-10, 0, -10],
    filePath: './sounds/ambientSound8Channel/l.mp3'
  },
  ,
  {
    id: 6,
    position: [-10, 0, 10],
    filePath: './sounds/ambientSound8Channel/ls.mp3'
  },
  ,
  {
    id: 7,
    position: [-10, 10, -10],
    filePath: './sounds/ambientSound8Channel/hl.mp3'
  },
  {
    id: 8,
    position: [-10, 10, 10],
    filePath: './sounds/ambientSound8Channel/hls.mp3'
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
  return (
    <Canvas camera={{ position: [0, 1, 5] }} className='bg-black'>
      <PointerLockControls />
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player position={[0, 1, 0]} />
      </Physics>
      <AmbientSoundObject soundObjects={soundObjects} />
    </Canvas>
  )
}
