import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const TaminaStandardScene = dynamic(
  () => import('../../components/scenes/TaminaStandardScene'),
  {
    ssr: false
  }
)

export default function TaminaStandard() {
  return (
    <div className='h-screen'>
      <TaminaStandardScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
