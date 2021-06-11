import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'
// import AmbientStereo from '../../components/objects/sound/AmbientStereo'
import AudioButton from '../../components/atoms/AudioButton'
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
      <h1 className='absolute top-0 right-0 z-10 pr-2'>
        Click on the screen to activate pointer lock controls
      </h1>
      <div className='h-screen'>
        <AmbientSoundScene />
        <BackHomeButton />
        <Stats />
        {/* TODO Make this work again and try the WAV stuff in the WAV 8 Channel room */}
        {/* <AmbientStereo state={audioState} /> */}
        <AudioButton
          state={audioState}
          onClick={() => setAudioState(!audioState)}
        />
      </div>
    </>
  )
}
