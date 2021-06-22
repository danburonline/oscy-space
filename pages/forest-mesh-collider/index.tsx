import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const ForestMeshCollider = dynamic(
  () => import('../../components/scenes/ForestMeshCollider'),
  {
    ssr: false
  }
)

export default function ForestMeshColliderScene() {
  return (
    <div className='h-screen'>
      <ForestMeshCollider />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
