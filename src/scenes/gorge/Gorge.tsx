import { Canvas } from '@react-three/fiber'
import { Loader, PointerLockControls, Stars, Stats } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Physics } from '@react-three/cannon'
import { Player } from '../../components/Player'
import { Ground } from '../../components/Ground'
import Water from './components/Water'

import Collider from '../../scenes/gorge/components/Collider'
import Lamps from '../../scenes/gorge/components/Lamps'
import Path from '../../scenes/gorge/components/Path'
import Rocks from '../../scenes/gorge/components/Rocks'
import StorageAssets from '../../scenes/gorge/components/StorageAssets'
import RoomElements from '../../scenes/gorge/components/RoomElements'
import Lighting from './components/Lighting'

import AmbientPositionalAudio from '../../components/AmbientPositionalSound'
import AmbientStereoSound from '../../components/AmbientStereoSound'
import AudioButton from '../../components/AudioButton'
import GorgeSoundArray from './utils/GorgeSoundArray'

const Gorge = (): JSX.Element => {
  const [audioState, setAudioState] = useState(false)

  return (
    <>
      <Canvas className='bg-black'>
        <Suspense fallback={null}>
          <Physics
            allowSleep={true}
            gravity={[0, -20, 0]}
            tolerance={0.0001}
            size={3}
            broadphase={'SAP'}
            iterations={10}
          >
            <Player />
            <Collider />
            <Path />
            <Ground />
          </Physics>
          <Rocks />
          <Lamps />
          <StorageAssets />
          <RoomElements />
          <Water />
        </Suspense>
        <AmbientPositionalAudio
          soundObjects={GorgeSoundArray}
          state={audioState}
        />
        <AmbientStereoSound
          state={audioState}
          // TODO Add the final ambient stereo sound URL from the audio engineers
          soundFileUrl={
            'https://storage.googleapis.com/oscy-cdn/proof_of_concept/r.wav'
          }
        />
        <PointerLockControls />
        <Lighting />
        <Stars fade={true} count={7500} />
        <color attach='background' args={['black']} />
        <Stats />
      </Canvas>
      <AudioButton
        state={audioState}
        onClick={() => setAudioState(!audioState)}
      />
      <Loader />
    </>
  )
}

export default Gorge
