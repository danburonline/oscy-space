import dynamic from 'next/dynamic'

const ForestScene = dynamic(() => import('../../src/scenes/forest/Forest'), {
  ssr: false
})

export default function ForestPage(): JSX.Element {
  return (
    <main className='h-screen'>
      <ForestScene />
    </main>
  )
}
