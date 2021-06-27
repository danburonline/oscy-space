import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const FinalTaminaTestScene = dynamic(
  () => import('../../components/scenes/FinalTaminaTestScene'),
  {
    ssr: false
  }
)

export default function FinalTaminaBlockin() {
  return (
    <div className='h-screen'>
      <FinalTaminaTestScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
