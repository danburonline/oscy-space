import Head from 'next/head'
import Header from '../src/components/Header'
import Cards from '../src/components/Cards'
import roomData from '../src/utils/roomData'
export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Oscy Space — Immersive Audio</title>
        <meta
          name='description'
          content='Oscy Space is an experimental and immersive spatial audio proof of concept implemented with React-Three-Fiber, where people can explore two interesting nature scenes from Switzerland.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section className='flex flex-col min-h-screen '>
        <main className='flex flex-col justify-center min-h-screen py-20'>
          <Header
            title='Welcome to'
            subTitle={`Two experimental and immersive spatial audio proof of concept scenes implemented with React-Three-Fiber.`}
            linkText='Oscy Space'
            linkUrl='https://github.com/danburonline/oscy-space'
          />
          <Cards cards={roomData} />
        </main>
      </section>
    </>
  )
}
