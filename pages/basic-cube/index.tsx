import { Canvas } from '@react-three/fiber'
import Cube from '../../components/objects/primitives/cube'
import { useControls } from 'leva'
import { OrbitControls, Stars, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

export default function BasicCube() {
  const { ambientIntensity } = useControls({ ambientIntensity: 0.25 })

  return (
    <div className='tw-h-screen'>
      <BackHomeButton />
      <Canvas className='tw-bg-black'>
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
    </div>
  )
}
