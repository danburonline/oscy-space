// @ts-nocheck
import * as THREE from 'three'
import React, { Suspense, useMemo, useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js'
import { useControls } from 'leva'

function PositionalAudio({ refs, url, volume, rolloffFactor }) {
  const sound = refs
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setRolloffFactor(0)
    sound.current.setDirectionalCone(180, 230, 0.1)
    sound.current.setLoop(true)
    sound.current.setVolume(volume)
    sound.current.play()
    const helper = new PositionalAudioHelper(sound.current)
    sound.current.add(helper)
    camera.add(listener)
    return () => camera.remove(listener)
  }, [])
  useEffect(() => {
    sound.current.setRolloffFactor(rolloffFactor)
    sound.current.setVolume(volume)
  }, [rolloffFactor, volume])
  return <positionalAudio ref={sound} args={[listener]} />
}

type SoundObject = {
  id: number
  position: number[]
  filePath: string
}

type SoundObjectProps = {
  soundObjects: SoundObject[]
}

export default function SoundObject(props: SoundObjectProps) {
  const { RSRotation, RSVolume, RSRolloff } = useControls({
    RSRotation: {
      value: Math.PI,
      min: 0,
      max: Math.PI * 2,
      step: Math.PI * 0.25
    },
    RSVolume: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.05
    },
    RSRolloff: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.05
    }
  })

  const audioRefs = useMemo(
    () =>
      Array(props.soundObjects.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  )

  const PositionalSoundObject = props.soundObjects.map((soundObject, index) => {
    return (
      <mesh position={soundObject.position} rotation={[0, RSRotation, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color='hotpink' wireframe />
        <PositionalAudio
          refs={audioRefs[index]}
          volume={RSVolume}
          rolloffFactor={RSRolloff}
          url={soundObject.filePath}
          key={soundObject.id}
        />
      </mesh>
    )
  })
  return <>{PositionalSoundObject}</>
}
