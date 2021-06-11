import { useEffect, useState } from 'react'
import Sound from 'react-sound'

export default function AmbientSound(props) {
  const [soundFile, setSoundFile] = useState('')

  useEffect(() => {
    setSoundFile('/sounds/ambientStereoSound.wav')
  }, [])

  let state = ''
  if (props.state) {
    state = Sound.status.PLAYING
  } else {
    state = Sound.status.PAUSED
  }

  return (
    <>
      {soundFile ? (
        <>
          <audio src={soundFile} controls autoPlay />
          {console.log('played')}
        </>
      ) : (
        console.log("didn't play")
      )}
    </>
  )
}
