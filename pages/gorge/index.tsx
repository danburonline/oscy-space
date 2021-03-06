import dynamic from 'next/dynamic'
import Head from 'next/head'
import MobileBlocker from '../../src/components/MobileBlocker'
import Expire from '../../src/components/Expire'

const GorgeScene = dynamic(() => import('../../src/scenes/gorge/Gorge'), {
  ssr: false
})

export default function GorgePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Oscy Space — Tamina Gorge in Switzerland</title>
        <meta
          name='description'
          content='A scene in which you can visit the Tamina gorge of Switzerland in a web-based 3D environment.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Expire delay={5000} />
      <main id='webGL' className='h-screen'>
        <GorgeScene />
        <MobileBlocker />
      </main>
    </>
  )
}
