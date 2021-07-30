import { useState } from 'react'
import Sound from 'react-sound'
import type { AmbientStereoSoundProps } from '../types/types'

export default function AmbientStereoSound(
  props: AmbientStereoSoundProps
): JSX.Element {
  const [playPosition, setPlayPosition] = useState({ start: 0 })

  const changePlayPositionHandler = () => {
    setPlayPosition({ start: 0 })
  }

  return (
    <Sound
      url={props.soundFileUrl}
      playStatus={props.state ? 'PLAYING' : 'PAUSED'}
      position={playPosition.start}
      volume={props.volume}
      // loop={true}
      onFinishedPlaying={changePlayPositionHandler}
    />
  )
}
