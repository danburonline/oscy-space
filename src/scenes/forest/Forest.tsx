import { Canvas } from '@react-three/fiber'
import {
  Loader,
  PointerLockControls,
  softShadows,
  Stars
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
import DoorPortals from './components/DoorPortals'

import AmbientStereoSound from '../../components/AmbientStereoSound'
import AmbientPositionalSound from '../../components/AmbientPositionalSound'
import forestSoundArray from './utils/forestSoundArray'
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
            size={115}
            broadphase={'SAP'}
            iterations={10}
          >
            <Player position={[0, 0.5, 0]} />
            <Collider />
            <Ground />
            <DoorPortals />
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
          soundObjects={forestSoundArray}
        />
      </Canvas>
      <AmbientStereoSound
        state={audioState}
        volume={40}
        soundFileUrl={
          '/forest/sound/alter_baum_huitikon_waldegg_stereo_render_final_wav_mp3_02_210729_wald_huitikon_waldegg.mp3'
        }
      />
      <AudioButton
        state={audioState}
        onClick={() => setAudioState(!audioState)}
      />
      <PointerLockButton setAudioState={() => setAudioState(true)} />
      <BackHomeButton setAudioState={() => setAudioState(false)} />
      <GoToNextScene currentSite={currentSiteEnum.FOREST} />
      <Loader />
      <FullScreenButton />
    </>
  )
}

export default Forest
