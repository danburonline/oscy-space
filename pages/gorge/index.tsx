import dynamic from 'next/dynamic'
import { useState } from 'react'
import Head from 'next/head'
import AmbientStereoSound from '../../src/components/molecules/AmbientStereoSound'

const GorgeScene = dynamic(() => import('../../src/scenes/gorge/Gorge'), {
  ssr: false
})

export default function GorgePage(): JSX.Element {
  // TODO Add the UI controls and pass the function to mutate the audioIsPlaying state
  const [audioIsPlaying /* setAudioIsPlaying */] = useState(false)

  return (
    <>
      <Head>
        <title>Oscy Space – Tamina Gorge in Switzerland</title>
        <meta
          name='description'
          content='A scene in which you can see the Tamina gorge of Switzerland in a web-based 3D environment.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='h-screen'>
        <AmbientStereoSound
          audioIsPlaying={audioIsPlaying}
          // TODO Add the final ambient stereo sound URL from the audio engineers
          soundFileUrl={'https://example.com/audio.wav'}
        />
        <GorgeScene />
      </main>
    </>
  )
}
