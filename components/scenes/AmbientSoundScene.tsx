import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, Loader } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Player } from '../objects/complex/Player'

function Ground() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color='grey' wireframe />
    </mesh>
  )
}

export default function FpvExample() {
  return (
    <>
    <Canvas camera={{ position: [0, 1, 5] }} className='bg-black'>
      <PointerLockControls />
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
      </Physics>
    </Canvas>
    <Loader />
    </>
  )
}
