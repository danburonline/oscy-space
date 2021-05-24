import { Suspense } from 'react'
import { OrbitControls, Stats, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import BackHomeButton from '../../components/atoms/BackHomeButton'
import dynamic from 'next/dynamic'
import { Sky } from '@react-three/drei'

const SalsaCharacter = dynamic(
  () => import('../../components/scenes/ImportedAnimationScene'),
  {
    ssr: false
  }
)

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
      <meshBasicMaterial attach='material' color='darkgrey' />
    </mesh>
  )
}

export default function ImportedAnimation() {
  return (
    <div className='h-screen'>
      <BackHomeButton />
      <Canvas camera={{ position: [0, 1.25, 3] }} className='bg-black'>
        <Plane />
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <SalsaCharacter />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
        </Suspense>
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  )
}
