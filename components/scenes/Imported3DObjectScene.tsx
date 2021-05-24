import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export default function Brain() {
  const gltf = useLoader(GLTFLoader, '/models/scene.gltf')
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  )
}
