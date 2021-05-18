import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

// The Cube needs to be imported on the client-side since
// the cannon library uses the window object
const DynamicPhysicsCube = dynamic(
  () => import('../../components/objects/primitives/physicsCube'),
  {
    ssr: false
  }
)

export default function PhysicsScene() {
  return (
    <Canvas>
      <DynamicPhysicsCube />
    </Canvas>
  )
}
