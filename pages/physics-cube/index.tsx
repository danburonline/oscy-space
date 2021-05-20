import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { OrbitControls, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

// The PhysicsCube needs to be imported on the client-side since
// the Cannon package uses the window object
const PhysicsCube = dynamic(
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
        <OrbitControls enableRotate={false} enablePan={false} />
        <PhysicsCube />
        <Stats />
      </Canvas>
    </div>
  )
}
