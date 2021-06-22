import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const LightMapScene = dynamic(
  () => import('../../components/scenes/LightMapScene'),
  {
    ssr: false
  }
)

export default function ForestMeshColliderScene() {
  return (
    <div className='h-screen'>
      <LightMapScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
