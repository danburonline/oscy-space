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

import FullScreenButton from '../../components/FullScreenButton'

const Gorge = (): JSX.Element => {
  const [audioState, setAudioState] = useState(false)

  return (
    <>
      <Canvas id='webGL' className='bg-black'>
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
        <PointerLockControls />
        <Lighting />
        <Stars fade={true} count={7500} />
        <color attach='background' args={['black']} />
        <Stats />
      </Canvas>
      <AmbientStereoSound
        state={audioState}
        volume={5}
        soundFileUrl={
          'https://storage.googleapis.com/oscy-cdn/taminaschlucht/02%20210724_taminaschlucht_master.mp3'
        }
      />
      <AudioButton
        state={audioState}
        onClick={() => setAudioState(!audioState)}
      />
      <FullScreenButton />
      <Loader />
    </>
  )
}

export default Gorge
