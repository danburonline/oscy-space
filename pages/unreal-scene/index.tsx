import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const ForestTaminaBlockinScene = dynamic(
  () => import('../../components/scenes/ForestTaminaBlockinScene'),
  {
    ssr: false
  }
)

export default function ForestTaminaBlockin() {
  return (
    <div className='h-screen'>
      <ForestTaminaBlockinScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
