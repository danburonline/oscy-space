import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const MayaDracoGltfScene = dynamic(
  () => import('../../components/scenes/MayaDracoGltfScene'),
  {
    ssr: false
  }
)

export default function MayaDracoGltf() {
  return (
    <div className='h-screen'>
      <MayaDracoGltfScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
