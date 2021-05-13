import { Canvas } from '@react-three/fiber'
import Box from './objects/box'
import styles from './BasicCube.module.scss'
import { useControls } from 'leva'
import { OrbitControls as CameraOrbitControls, Stars } from '@react-three/drei'

export default function BasicCube() {
  const { ambientIntensity } = useControls({ ambientIntensity: 0.25 })

  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        {/* Controls */}
        <CameraOrbitControls />

        {/* Lights */}
        <pointLight position={[10, 15, 10]} />
        <ambientLight intensity={ambientIntensity} />

        {/* Objects */}
        <Stars />
        <Box />
      </Canvas>
    </div>
  )
}
