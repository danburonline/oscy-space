import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, Canvas } from '@react-three/fiber'
import { FlyControls, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

function Forest() {
  const forestGltf = useLoader(GLTFLoader, '/models/forest.gltf')
  return (
    <>
      <primitive object={forestGltf.scene} dispose={null} scale={1} />
    </>
  )
}

export default function ForestScene() {
  return (
    <Canvas className='bg-black'>
      <Suspense fallback={null}>
        <Environment preset='forest' background />
        <Forest />
      </Suspense>
      <FlyControls dragToLook={true} movementSpeed={300.0} rollSpeed={0.005} />
      <OrbitControls />
    </Canvas>
  )
}
