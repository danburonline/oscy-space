import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { OrbitControls, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

// The Cube needs to be imported on the client-side since
// the cannon package uses the window object
const DynamicPhysicsCube = dynamic(
  () => import('../../components/objects/primitives/physicsCube'),
  {
    ssr: false
  }
)

export default function PhysicsScene() {
  return (
    <div className='tw-h-screen'>
      <BackHomeButton />
      <Canvas className='tw-bg-black'>
        {/* Controls */}
        <OrbitControls enableRotate={false} enablePan={false} />

        {/* Cube */}
        <DynamicPhysicsCube />

        {/* Stats */}
        <Stats />
      </Canvas>
    </div>
  )
}
