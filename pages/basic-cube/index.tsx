import { Canvas } from '@react-three/fiber'
import SimpleCube from '../../components/objects/primitives/SimpleCube'
import { useControls } from 'leva'
import { OrbitControls, Stars, Stats } from '@react-three/drei'
import BackHomeButton from '../../components/atoms/BackHomeButton'

export default function BasicCube() {
  const { ambientIntensity } = useControls({ ambientIntensity: 0.25 })

  return (
    <div className='h-screen'>
      <BackHomeButton />
      <Canvas className='bg-black'>
        <OrbitControls />

        <pointLight position={[10, 15, 10]} />
        <ambientLight intensity={ambientIntensity} />

        <Stars />
        <SimpleCube />

        <Stats />
      </Canvas>
    </div>
  )
}
