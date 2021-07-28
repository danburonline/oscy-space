import { Canvas } from '@react-three/fiber'
import { Loader, PointerLockControls, Stars, Stats } from '@react-three/drei'
import { Suspense } from 'react'
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

const Gorge = (): JSX.Element => {
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
        <PointerLockControls />
        <Lighting />
        <Stars fade={true} count={7500} />
        <color attach='background' args={['black']} />
        <Stats />
      </Canvas>
      <Loader />
    </>
  )
}

export default Gorge
