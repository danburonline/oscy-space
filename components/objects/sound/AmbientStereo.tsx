import { useEffect, useState } from 'react'
import Sound from 'react-sound'

export default function AmbientSound(props) {
  const [soundFile, setSoundFile] = useState('')

  useEffect(() => {
    setSoundFile(
      'https://storage.googleapis.com/oscy-cdn/ambientStereoSound.wav'
    )
  }, [])

  let playPause = Sound.status.PAUSED

  if(props.state) {
    playPause = Sound.status.PLAYING
  }else{
    playPause = Sound.status.PAUSED
  }

  return (
    <Sound
      url={soundFile}
      playStatus={playPause}
      volume={100}
      autoLoad={true}
      loop={true}
    />
  )
}
