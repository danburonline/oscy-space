import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const Model = dynamic(
  () => import('../../components/scenes/Imported3DObjectScene'),
  {
    ssr: false
  }
)

export default function ImportedModel() {
  return (
    <div className='h-screen'>
      <BackHomeButton />
      <Canvas camera={{ position: [50, 0, 50] }} className='bg-black'>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset='sunset' background />
        </Suspense>
        <Stats />
      </Canvas>
    </div>
  )
}
