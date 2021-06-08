import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
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
      <OrbitControls />
    </Canvas>
  )
}
