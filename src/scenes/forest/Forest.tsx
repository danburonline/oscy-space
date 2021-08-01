import { Canvas } from '@react-three/fiber'
import {
  Loader,
  PointerLockControls,
  softShadows,
  Stars,
  Stats
} from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Physics } from '@react-three/cannon'

import Collider from '../../scenes/forest/components/Collider'
import BaseRock from '../../scenes/forest/components/BaseRock'
import Beeches from '../../scenes/forest/components/Beeches'
import EnvironmentGround from '../../scenes/forest/components/EnvironmentGround'
import FoliageGrp from '../../scenes/forest/components/FoliageGrp'
import Ladders from '../../scenes/forest/components/Ladders'
import WallRock from '../../scenes/forest/components/WallRock'
import { Player } from '../../components/Player'
import { Ground } from '../../components/Ground'
import Lighting from './components/Lighting'
import RoofWall from './components/RoofWall'
import Eibe from './components/Eibe'
import Water from './components/Water'
import Mushrooms from './components/Mushrooms'
import Door from './components/Door'

import AmbientStereoSound from '../../components/AmbientStereoSound'
import AmbientPositionalSound from '../../components/AmbientPositionalSound'
import ForestSoundArray from './utils/ForestSoundArray'
import AudioButton from '../../components/AudioButton'

import PointerLockButton from '../../components/PointerLockButton'
import BackHomeButton from '../../components/BackHomeButton'
import GoToNextScene from '../../components/GoToNextSceneButton'
import FullScreenButton from '../../../src/components/FullScreenButton'
import { currentSiteEnum } from '../../types/types'

softShadows()

const Forest = (): JSX.Element => {
  const [audioState, setAudioState] = useState(false)

  return (
    <>
      <Canvas shadows={true} className='bg-black'>
        <Suspense fallback={null}>
          <Physics
            allowSleep={true}
            gravity={[0, -20, 0]}
            tolerance={0.0001}
            size={10}
            broadphase={'SAP'}
            iterations={10}
          >
            <Player position={[0, 0.5, 0]} />
            <Collider />
            <Ground />
          </Physics>
          <BaseRock />
          <Beeches />
          <EnvironmentGround />
          <FoliageGrp />
          <Ladders />
          <WallRock />
          <RoofWall />
          <Eibe />
          <Water />
          <Door />
          <Mushrooms />
        </Suspense>
        <PointerLockControls selector='#pointerLockButton' />
        <Lighting />
        <Stars fade={true} count={7500} />
        <color attach='background' args={['black']} />
        <AmbientPositionalSound
          state={audioState}
          soundObjects={ForestSoundArray}
        />
        <Stats />
      </Canvas>
      <AmbientStereoSound
        state={audioState}
        volume={40}
        soundFileUrl={
          'https://storage.googleapis.com/oscy-cdn/alter%20baum_huitikon%20waldegg_stereo%20render_final_wav_mp3/02%20210729_wald_huitikon%20waldegg.mp3'
        }
      />
      <AudioButton
        state={audioState}
        onClick={() => setAudioState(!audioState)}
      />
      <PointerLockButton />
      <BackHomeButton />
      <GoToNextScene currentSite={currentSiteEnum.FOREST} />
      <Loader />
      <FullScreenButton />
    </>
  )
}

export default Forest
