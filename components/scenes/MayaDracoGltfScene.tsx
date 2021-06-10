import { Canvas } from '@react-three/fiber'
import { FlyControls, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

import { useLoader } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function TaminaDraco() {
  const gltf = useLoader(
    GLTFLoader,
    '/models/TaminaSchlucht_Draco.gltf',
    loader => {
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath("/draco-gltf/")
      loader.setDRACOLoader(dracoLoader)
    }
  )

  return <primitive object={gltf.scene} scale={0.4} />
}

export default function ForestScene() {
  return (
    <Canvas className='bg-black'>
      <Environment preset='forest' background />
      <Suspense fallback={null}>
        <TaminaDraco />
      </Suspense>
      <FlyControls dragToLook={true} movementSpeed={300.0} rollSpeed={0.005} />
      <OrbitControls />
    </Canvas>
  )
}
