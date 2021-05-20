import Head from 'next/head'
import Header from '../components/organisms/Header'
import Cards from '../components/organisms/Cards'

const content = [
  {
    title: '✅ Basic Cube',
    description: 'Basic cube with react-three-fiber and leva controls.',
    link: '/basic-cube'
  },
  {
    title: '✅ Physics Cube',
    description: 'Basic cube applied with physics from the cannon package.',
    link: '/physics-cube'
  },
  {
    title: '✅ Physics Experiment',
    description:
      'Little physics experiment using Cannon, animations and textures.',
    link: '/physics-experiment'
  },
  {
    title: '❌ Imported 3D Object',
    description:
      "This scene is currently in development. As soon as it's done, you'll see it here.",
    isNotDone: true
  },
  {
    title: '❌  FPV Scene',
    description:
      "This scene is currently in development. As soon as it's done, you'll see it here.",
    isNotDone: true
  },
  {
    title: '❌ Forest Block-In',
    description:
      "This scene is currently in development. As soon as it's done, you'll see it here.",
    isNotDone: true
  },
  {
    title: '❌ Tamina Block-In',
    description:
      "This scene is currently in development. As soon as it's done, you'll see it here.",
    isNotDone: true
  },
  {
    title: '❌ Spatial Audio',
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
      <section className='tw-min-h-screen tw-flex tw-flex-col '>
        <main className='tw-min-h-screen tw-py-20 tw-flex tw-flex-col tw-justify-center'>
          <Header
            title='Welcome to'
            subTitle='ThreeJS Proof of Concept Scenes'
            linkText='Oscy Space'
            linkUrl='https://github.com/danburonline/oscy-space'
          />
          <Cards cards={content} />
        </main>
      </section>
    </>
  )
}
