import { useEffect, useState } from 'react'

export default function AmbientSound(props) {
  const [soundFile, setSoundFile] = useState('')

  useEffect(() => {
    setSoundFile(
      'https://storage.googleapis.com/oscy-cdn/ambientStereoSound.wav'
    )
  }, [])
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
