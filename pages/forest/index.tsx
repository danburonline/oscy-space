import dynamic from 'next/dynamic'
import { useState } from 'react'
import Head from 'next/head'
import AmbientStereoSound from '../../src/components/molecules/AmbientStereoSound'

const ForestScene = dynamic(() => import('../../src/scenes/forest/Forest'), {
  ssr: false
})

export default function ForestPage(): JSX.Element {
  // TODO Add the UI controls and pass the function to mutate the audioIsPlaying state
  const [audioIsPlaying /* setAudioIsPlaying */] = useState(false)

  return (
    <>
      <Head>
        <title>Oscy Space – Oldest Tree of Switzerland</title>
        <meta
          name='description'
          content='A scene in which you can visit the oldest tree of Switzerland in a web-based 3D environment.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='h-screen'>
        <AmbientStereoSound
          audioIsPlaying={audioIsPlaying}
          // TODO Add the final ambient stereo sound URL from the audio engineers
          soundFileUrl={'https://example.com/audio.wav'}
        />
        <ForestScene />
      </main>
    </>
  )
}
