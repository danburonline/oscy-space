import Head from 'next/head'
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
      <main className='flex flex-row items-center justify-center min-h-screen'>
        <h1>Oscy Space &mdash; V0.1.1</h1>
      </main>
    </>
  )
}
