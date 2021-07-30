import dynamic from 'next/dynamic'
import Head from 'next/head'

const ForestScene = dynamic(() => import('../../src/scenes/forest/Forest'), {
  ssr: false
})

export default function ForestPage(): JSX.Element {
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
        <ForestScene />
      </main>
    </>
  )
}
