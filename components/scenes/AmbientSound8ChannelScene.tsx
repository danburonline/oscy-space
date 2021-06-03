import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Player } from '../objects/complex/Player'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const AmbientSound8ChannelRight = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelRight'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelRightS = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelRightS'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelHRight = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelHRight'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelHRightS = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelHRightS'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelLeft = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelLeft'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelLeftS = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelLeftS'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelHLeft = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelHLeft'),
  {
      ssr: false
  }
)

const AmbientSound8ChannelHLeftS = dynamic(
  () => import('../../components/objects/primitives/Ambient8ChannelHLeftS'),
  {
      ssr: false
  }
)

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
        <Player />
      </Physics>
      <Suspense fallback={null}>
        <AmbientSound8ChannelRight url={"/sounds/ambientSound8Channel/r.wav"} position={[10, 0, -10]} />
        <AmbientSound8ChannelRightS url={"/sounds/ambientSound8Channel/rs.wav"} position={[10, 0, 10]} />
        <AmbientSound8ChannelHRight url={"/sounds/ambientSound8Channel/hr.wav"} position={[10, 10, -10]} />
        <AmbientSound8ChannelHRightS url={"/sounds/ambientSound8Channel/hrs.wav"} position={[10, 10, 10]} />
        <AmbientSound8ChannelLeft url={"/sounds/ambientSound8Channel/l.wav"} position={[-10, 0, -10]} />
        <AmbientSound8ChannelLeftS url={"/sounds/ambientSound8Channel/ls.wav"} position={[-10, 0, 10]} />
        <AmbientSound8ChannelHLeft url={"/sounds/ambientSound8Channel/hl.wav"} position={[-10, 10, -10]} />
        <AmbientSound8ChannelHLeftS url={"/sounds/ambientSound8Channel/hls.wav"} position={[-10, 10, 10]} />
      </Suspense>
    </Canvas>
  )
}