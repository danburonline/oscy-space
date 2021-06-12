import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const TaminaDracoScene = dynamic(
  () => import('../../components/scenes/TaminaDracoScene'),
  {
    ssr: false
  }
)

export default function ForestTaminaBlockin() {
  return (
    <div className='h-screen'>
      <TaminaDracoScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
