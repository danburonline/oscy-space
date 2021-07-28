import { AudioListener, AudioLoader } from 'three'
import { useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import type { SoundObjectProps } from '../types/types'

export default function SoundObject(props: SoundObjectProps): JSX.Element {
  const sound = props.refs
  const { camera } = useThree()
  const [listener] = useState(() => new AudioListener())
  const buffer = useLoader(AudioLoader, props.url)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setRolloffFactor(1)
    sound.current.setDirectionalCone(180, 260, 0)
    sound.current.setLoop(true)
    sound.current.setVolume(props.volume)
    sound.current.play()
    camera.add(listener)
    return () => camera.remove(listener)
  }, [buffer, camera, listener, sound, props.volume])

  useEffect(() => {
    sound.current.setDirectionalCone(180, 260, props.coneOuterGain)
    sound.current.setRolloffFactor(props.rolloffFactor)
    sound.current.setVolume(props.volume)
  }, [props.rolloffFactor, props.volume, props.coneOuterGain, sound])

  if (props.state) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      sound.current.play()
    }, [props.state, sound])
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      sound.current.pause()
    }, [props.state, sound])
  }
  return <positionalAudio ref={sound} args={[listener]} />
}
