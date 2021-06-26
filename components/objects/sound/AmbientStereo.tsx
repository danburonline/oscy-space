import { useEffect, useState } from 'react'
import Sound from 'react-sound'

export default function AmbientSound(props) {
  const [soundFile, setSoundFile] = useState('')

  useEffect(() => {
    setSoundFile(
      'https://storage.googleapis.com/oscy-cdn/proof_of_concept/03%20proof%20of%20concept_ortf3d_8.0%20to%20stereo_kurz.wav'
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
