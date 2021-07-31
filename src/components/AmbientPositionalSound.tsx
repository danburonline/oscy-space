import { Suspense, useMemo, createRef } from 'react'
import SoundObject from './SoundObject'
import type { PositionalAudio } from 'three'
import type { AmbientPositionalSoundProps } from '../types/types'

export default function AmbientPositionalSound(
  props: AmbientPositionalSoundProps
): JSX.Element {
  const audioRefs = useMemo(
    () =>
      Array(props.soundObjects.length)
        .fill(0)
        .map(() => createRef<PositionalAudio>()),
    [props.soundObjects.length]
  )

  const PositionalSoundObject = props.soundObjects.map((soundObject, index) => {
    return (
      <mesh
        key={soundObject.id}
        position={[soundObject.x, soundObject.y, soundObject.z]}
        rotation={[0, soundObject.rotation, 0]}
      >
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color='hotpink' wireframe />
        <SoundObject
          refs={audioRefs[index]}
          volume={soundObject.volume}
          rolloffFactor={soundObject.rolloffFactor}
          url={soundObject.filePath}
          key={soundObject.id}
          coneOuterGain={soundObject.coneOuterGain}
          innerAngle={soundObject.innerAngle}
          outerAngle={soundObject.outerAngle}
          state={props.state}
        />
      </mesh>
    )
  })
  return <Suspense fallback={null}>{PositionalSoundObject}</Suspense>
}
