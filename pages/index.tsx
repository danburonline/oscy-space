import Head from 'next/head'
import Header from '../components/organisms/Header'
import Cards from '../components/organisms/Cards'

const content = [
  {
    title: '#1 Basic Cube',
    description: 'Basic cube with react-three-fiber and leva controls.',
    link: '/basic-cube'
  },
  {
    title: '#2 Physics Cube',
    description: 'Basic cube applied with physics from the cannon package.',
    link: '/physics-cube'
  },
  {
    title: '#3 Physics Experiment',
    description:
      "This scene is currently in development. As soon as it's done, you'll see it here.",
    isNotDone: true
  },
  {
    title: '#4 FPV Scene',
    description:
      "This scene is currently in development. As soon as it's done, you'll see it here.",
    isNotDone: true
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscy Space – Proof of Concept</title>
      </Head>
      <div className='tw-min-h-screen tw-flex tw-flex-col '>
        <div className='tw-min-h-screen tw-py-20 tw-flex tw-flex-col tw-justify-center'>
          <Header
            title='Welcome to'
            subTitle='ThreeJS Proof of Concept Scenes'
            linkText='Oscy Space'
            linkUrl='https://github.com/danburonline/oscy-space'
          />
          <Cards cards={content} />
        </div>
      </div>
    </>
  )
}
