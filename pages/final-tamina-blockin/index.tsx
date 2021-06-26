import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const FinalTaminaBlockinScene = dynamic(
  () => import('../../components/scenes/FinalTaminaBlockinScene'),
  {
    ssr: false
  }
)

export default function FinalTaminaBlockin() {
  return (
    <div className='h-screen'>
      <FinalTaminaBlockinScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
