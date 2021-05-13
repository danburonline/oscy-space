import { Canvas } from '@react-three/fiber'
import Box from './objects/box'
import styles from './BasicCube.module.scss'
import { OrbitControls, Stars } from '@react-three/drei'
import { useControls } from 'leva'

export default function BasicCube() {
  const { ambientIntensity } = useControls({ ambientIntensity: 0.25 })

  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        {/* TODO Resolve OrbitControls TypeScript error */}
        {/* @ts-ignore Utils */}
        <OrbitControls />
        <Stars />

        {/* Lights */}
        <pointLight position={[10, 15, 10]} angle={0.3} />
        <ambientLight intensity={ambientIntensity} />

        {/* Objects */}
        <Box />
      </Canvas>
    </div>
  )
}
