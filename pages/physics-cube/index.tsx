import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { OrbitControls, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

// The MassCube needs to be imported on the client-side since
// the Cannon package uses the window object
const MassCube = dynamic(
  () => import('../../components/objects/primitives/MassCube'),
  {
    ssr: false
  }
)

export default function PhysicsScene() {
  return (
    <div className='h-screen'>
      <BackHomeButton />
      <Canvas className='bg-black'>
        <OrbitControls enableRotate={false} enablePan={false} />
        <MassCube />
        <Stats />
      </Canvas>
    </div>
  )
}
