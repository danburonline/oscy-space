import * as THREE from 'three'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js'
import { useControls } from 'leva'

function Sound({ url, volume, rolloffFactor }) {

    const sound = useRef()
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
    return (
        <positionalAudio ref={sound} args={[listener]} />
    )
}

export default function App({ url, position}) {
    const { HRSX, HRSY, HRSZ, HRSRotation, HRSVolume, HRSRolloff } = useControls({
        HRSX: {
          value: position[0],
          min: -20,
          max: 20,
          step: 1
        },
        HRSY: {
            value: position[1],
            min: -20,
            max: 20,
            step: 1
          },
        HRSZ: {
            value: position[2],
            min: -20,
            max: 20,
            step: 1
        },
        HRSRotation: {
            value: Math.PI,
            min: 0,
            max: Math.PI * 2,
            step: Math.PI * 0.25
        },
        HRSVolume: {
            value: 1,
            min: 0,
            max: 1,
            step: 0.05
        },
        HRSRolloff: {
            value: 1,
            min: 0,
            max: 1,
            step: 0.05
        }
      })
  return (

      <Suspense fallback={null}>
        <mesh position={[HRSX, HRSY, HRSZ]} rotation={[0, HRSRotation, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="hotpink" wireframe />
          <Sound url={url} volume={HRSVolume} rolloffFactor={HRSRolloff} />
        </mesh>
      </Suspense>

  )
}