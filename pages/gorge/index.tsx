import dynamic from 'next/dynamic'

const GorgeScene = dynamic(() => import('../../src/scenes/gorge/Gorge'), {
  ssr: false
})

export default function GorgePage(): JSX.Element {
  return (
    <>
      <title>Oscy Space – Tamina Gorge in Switzerland</title>
      <meta
        name='description'
        content='A scene in which you can see the Tamina gorge of Switzerland in a web-based 3D environment.'
      />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <main className='h-screen'>
        <GorgeScene />
      </main>
    </>
  )
}
