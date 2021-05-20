import React from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { OrbitControls, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

// The PhysicsExperimentScene needs to be imported on the client-side since
// the Cannon package uses the window object
const PhysicsExperimentScene = dynamic(
  () => import('../../components/scenes/PhysicsExperimentScene'),
  {
    ssr: false
  }
)

export default function PhysicsExperiment() {
  return (
    <div className='tw-h-screen'>
      <BackHomeButton />
      <Canvas
        className='tw-bg-black'
        gl={{ alpha: false }}
        camera={{ position: [0, -12, 16] }}>
        <OrbitControls />
        <PhysicsExperimentScene />
      </Canvas>
      <Stats />
    </div>
  )
}
