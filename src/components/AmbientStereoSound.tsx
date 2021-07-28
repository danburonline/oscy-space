import { useEffect, useState } from 'react'
import Sound from 'react-sound'

type AmbientStereoSoundProps = {
  audioIsPlaying: boolean
  soundFileUrl: string
}

export default function AmbientStereoSound(
  props: AmbientStereoSoundProps
): JSX.Element {
  const [soundFile, setSoundFile] = useState('')

  useEffect(() => {
    setSoundFile(props.soundFileUrl)
  }, [props.soundFileUrl])

  return (
    <Sound
      url={soundFile}
      playStatus={props.audioIsPlaying ? 'PLAYING' : 'PAUSED'}
      volume={30}
      autoLoad={true}
      loop={true}
    />
  )
}
