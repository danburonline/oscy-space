// @ts-nocheck
import * as THREE from 'three'
import React, { Suspense, useMemo, useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js'
import { useControls } from 'leva'

function PositionalAudio({ refs, url, volume, rolloffFactor, coneOuterGain, state }) {
  const sound = refs
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setRolloffFactor(1)
    sound.current.setDirectionalCone(180, 260, 0)
    sound.current.setLoop(true)
    sound.current.setVolume(volume)
    sound.current.play()
    const helper = new PositionalAudioHelper(sound.current)
    sound.current.add(helper)
    camera.add(listener)
    return () => camera.remove(listener)
  }, [])
  useEffect(() => {
    sound.current.setDirectionalCone(180, 260, coneOuterGain)
    sound.current.setRolloffFactor(rolloffFactor)
    sound.current.setVolume(volume)
  }, [rolloffFactor, volume, coneOuterGain])
  if(state) {
    useEffect(() => {
      sound.current.play()
    }, [state])
  }else{
    useEffect(() => {
      sound.current.pause()
    }, [state])
  }
  return <positionalAudio ref={sound} args={[listener]} />
}

type SoundObject = {
  id: number
  x: number
  y: number
  z: number
  position: number[]
  filePath: string
  name: string
  rotation: number
}

type SoundObjectProps = {
  soundObjects: SoundObject[]
}

export default function SoundObject(props: SoundObjectProps) {
  

  const audioRefs = useMemo(
    () =>
      Array(props.soundObjects.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  )

  const PositionalSoundObject = props.soundObjects.map((soundObject, index) => {

    const name = soundObject.name

    const { Rotation, Volume, Rolloff, X, Y, Z, ConeOuterGain } = useControls( name, {
      Rotation: {
        value: soundObject.rotation,
        min: 0,
        max: Math.PI * 2,
        step: Math.PI * 0.25
      },
      Volume: {
        value: 1,
        min: 0,
        max: 1,
        step: 0.05
      },
      Rolloff: {
        value: 1,
        min: 0,
        max: 1,
        step: 0.05
      },
      ConeOuterGain: {
        value: 0,
        min: 0,
        max: 1
      },
      X: {
        value: soundObject.x,
      },
      Y: {
        value: soundObject.y,
      },
      Z: {
        value: soundObject.z,
      }
    })

    return (
      <mesh position={[X, Y, Z]} rotation={[0, Rotation, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color='hotpink' wireframe />
        <PositionalAudio
          refs={audioRefs[index]}
          volume={Volume}
          rolloffFactor={Rolloff}
          url={soundObject.filePath}
          key={soundObject.id}
          coneOuterGain={ConeOuterGain}
          state={props.state}
        />
      </mesh>
    )
  })
  return <Suspense fallback={null}>{PositionalSoundObject}</Suspense>
}
