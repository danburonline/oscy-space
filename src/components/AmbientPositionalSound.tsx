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
        <SoundObject
          refs={audioRefs[index]}
          volume={1}
          rolloffFactor={1}
          url={soundObject.filePath}
          key={soundObject.id}
          coneOuterGain={0}
          state={props.state}
        />
      </mesh>
    )
  })
  return <Suspense fallback={null}>{PositionalSoundObject}</Suspense>
}
