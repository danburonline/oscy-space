import { Canvas } from '@react-three/fiber'
import { Loader, PointerLockControls } from '@react-three/drei'
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
            <Ground />
          </Physics>
          <Water />
        </Suspense>

        {/* Controls */}
        <PointerLockControls />

        {/* Lighting */}
        <Lighting />
      </Canvas>
      <Loader />
    </>
  )
}

export default Gorge
