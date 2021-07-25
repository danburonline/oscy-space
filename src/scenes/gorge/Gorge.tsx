import { Canvas } from '@react-three/fiber'
import { Loader, PointerLockControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import { Player } from '../../components/organisms/Player'
import { Ground } from '../../components/atoms/Ground'
import Water from '../../components/atoms/TaminaWater'

import Collider from '../../scenes/gorge/components/Collider'
import Lamps from '../../scenes/gorge/components/Lamps'
import Path from '../../scenes/gorge/components/Path'
import Rocks from '../../scenes/gorge/components/Rocks'
import StorageAssets from '../../scenes/gorge/components/StorageAssets'
import RoomElements from '../../scenes/gorge/components/RoomElements'
import Lighting from './components/Lighting'

const Gorge = (): JSX.Element => {
  return (
    <>
      <Canvas className='bg-black'>
        <Suspense fallback={null}>
          <Physics
            allowSleep={true}
            gravity={[0, -10, 0]}
            tolerance={0.0001}
            size={3}
            broadphase={'SAP'}
            iterations={10}
          >
            <Player />
            <Collider />
            <Lamps />
            <Path />
            <Rocks />
            <StorageAssets />
            <RoomElements />
            <Ground />
          </Physics>
          <Water />
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

export default Gorge
