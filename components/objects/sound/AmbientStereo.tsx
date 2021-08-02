import { useEffect, useState } from 'react'
import Sound from 'react-sound'

export default function AmbientSound(props) {
  const [soundFile, setSoundFile] = useState('')

  useEffect(() => {
    setSoundFile(
      './sounds/ambient-stereo/proof_of_concept_ortf3d_8-0_to_stereo_kurz.mp3'
    )
  }, [])

  let playPause = Sound.status.PAUSED

  if (props.state) {
    playPause = Sound.status.PLAYING
  } else {
    playPause = Sound.status.PAUSED
  }

  return (
    <Sound
      url={soundFile}
      playStatus={playPause}
      volume={30}
      autoLoad={true}
      loop={true}
    />
  )
}
