import { Canvas } from '@react-three/fiber'
import Cube from '../../components/objects/primitives/cube'
import { useControls } from 'leva'
import { OrbitControls, Stars, Stats } from '@react-three/drei'

export default function BasicCube() {
  const { ambientIntensity } = useControls({ ambientIntensity: 0.25 })

  return (
    <Canvas>
      {/* Controls */}
      <OrbitControls />

      {/* Lights */}
      <pointLight position={[10, 15, 10]} />
      <ambientLight intensity={ambientIntensity} />

      {/* Objects */}
      <Stars />
      <Cube />

      {/* Stats */}
      <Stats />
    </Canvas>
  )
}
