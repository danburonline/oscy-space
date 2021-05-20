import { Canvas } from '@react-three/fiber'
import Cube from '../../components/objects/primitives/Cube'
import { useControls } from 'leva'
import { OrbitControls, Stars, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

export default function BasicCube() {
  const { ambientIntensity } = useControls({ ambientIntensity: 0.25 })

  return (
    <div className='tw-h-screen'>
      <BackHomeButton />
      <Canvas className='tw-bg-black'>
        <OrbitControls />

        <pointLight position={[10, 15, 10]} />
        <ambientLight intensity={ambientIntensity} />

        <Stars />
        <Cube />

        <Stats />
      </Canvas>
    </div>
  )
}
