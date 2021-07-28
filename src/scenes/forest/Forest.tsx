import { Canvas } from '@react-three/fiber'
import { Loader, PointerLockControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import { Player } from '../../components/organisms/Player'
import { Ground } from '../../components/atoms/Ground'

import Collider from '../../scenes/forest/components/Collider'
import BaseRock from '../../scenes/forest/components/BaseRock'
import Beeches from '../../scenes/forest/components/Beeches'
import EnvironmentGround from '../../scenes/forest/components/EnvironmentGround'
import FoliageGrp from '../../scenes/forest/components/FoliageGrp'
import Ladders from '../../scenes/forest/components/Ladders'
import WallRock from '../../scenes/forest/components/WallRock'
import Lighting from './components/Lighting'
import RoofWall from './components/RoofWall'

const Forest = (): JSX.Element => {
  return (
    <>
      <Canvas className='bg-black'>
        <Suspense fallback={null}>
          <Physics
            allowSleep={true}
            gravity={[0, -10, 0]}
            tolerance={0.0001}
            size={10}
            broadphase={'SAP'}
            iterations={10}
          >
            <Player />
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
        </Suspense>
        <PointerLockControls />
        <Lighting />
        <Stars fade={true} count={7500} />
        <color attach='background' args={['black']} />
      </Canvas>
      <Loader />
    </>
  )
}

export default Forest
