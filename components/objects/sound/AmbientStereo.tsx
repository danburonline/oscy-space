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
          <Sound
            url={soundFile}
            autoLoad={true}
            playStatus={state}
            loop={true}
            volume={100}
          />
          {console.log('played')}
        </>
      ) : (
        console.log("didn't play")
      )}
    </>
  )
}
