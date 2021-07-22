import dynamic from 'next/dynamic'

const GorgeScene = dynamic(() => import('../../src/scenes/gorge/Gorge'), {
  ssr: false
})

export default function GorgePage(): JSX.Element {
  return (
    <main className='h-screen'>
      <GorgeScene />
    </main>
  )
}
