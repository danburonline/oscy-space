import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const FpvExampleScene = dynamic(
  () => import('../../components/scenes/FpvExampleScene'),
  {
    ssr: false
  }
)

export default function FpvExample() {
  return (
    <div className='h-screen'>
      <FpvExampleScene />
      <BackHomeButton />
      <Stats />
    </div>
  )
}
