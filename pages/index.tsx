import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscy Space – Proof of Concept</title>
        <meta
          name='description'
          content='This is the proof of concept for Oscy Space'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-lg font-semibold font-display'>
          Welcome to{' '}
          <a href='https://github.com/danburonline/oscy-space'>Oscy Space</a>
        </h1>

        <p>ThreeJS example scenes</p>

        <div>
          <a href='/basic-cube'>
            <h2>#1 Basic Cube &rarr;</h2>
            <p>Basic cube with react-three-fiber and leva controls.</p>
          </a>

          <a href='/physics-cube'>
            <h2>#2 Physics Cube &rarr;</h2>
            <p>Basic cube applied with physics from the cannon package.</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/master/examples'>
            <h2>Scene 3 &rarr;</h2>
            <p>Neque est ut quo rerum aperiam quas. Natus nulla in harum.</p>
          </a>

          <a href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
            <h2>Scene 4 &rarr;</h2>
            <p>Neque est ut quo rerum aperiam quas. Natus nulla in harum.</p>
          </a>
        </div>
      </main>

      <footer>
        <p>
          Created by <span>Daniel Burger & David Fritz</span>
        </p>
      </footer>
    </>
  )
}
