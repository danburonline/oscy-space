import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'
import AmbientStereo from '../../components/objects/sound/AmbientStereo'
import AudioButton from '../../components/atoms/AudioButton'
import FullScreenButton from '../../components/atoms/FullScreenButton'
import PointerLockButton from '../../components/atoms/PointerLockButton'
import MobileBlocker from '../../components/utils/mobileBlocker'
import { useState } from 'react'

const AmbientSoundScene = dynamic(
  () => import('../../components/scenes/AmbientSoundScene'),
  {
    ssr: false
  }
)

export default function FpvExample() {
  const [audioState, setAudioState] = useState(false)

  return (
    <>
      <MobileBlocker />
      <div id={'webGL'} className='h-screen'>
        <AmbientSoundScene />
        <BackHomeButton />
        <Stats />
        <AmbientStereo state={audioState} />
        <AudioButton
          state={audioState}
          onClick={() => setAudioState(!audioState)}
        />
        <FullScreenButton />
        <PointerLockButton />
      </div>
    </>
  )
}
