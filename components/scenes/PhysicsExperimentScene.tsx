import React, { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'

import Plane from '../../components/objects/primitives/Plane'
import Box from '../../components/objects/primitives/Box'
import InstancedSpheres from '../../components/objects/dynamic/InstancedSpheres'

export default function PhysicsExperiment() {
  return (
    <>
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[30, 0, 30]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <pointLight position={[-30, 0, -30]} intensity={0.5} />
      <Physics gravity={[0, 0, -30]}>
        <Plane color={niceColors[17][4]} />
        <Plane
          color={niceColors[17][1]}
          position={[-6, 0, 0]}
          rotation={[0, 0.9, 0]}
        />
        <Plane
          color={niceColors[17][2]}
          position={[6, 0, 0]}
          rotation={[0, -0.9, 0]}
        />
        <Plane
          color={niceColors[17][3]}
          position={[0, 6, 0]}
          rotation={[0.9, 0, 0]}
        />
        <Plane
          color={niceColors[17][0]}
          position={[0, -6, 0]}
          rotation={[-0.9, 0, 0]}
        />
        <Box />
        <Suspense fallback={null}>
          <InstancedSpheres number={100} />
        </Suspense>
      </Physics>
    </>
  )
}
