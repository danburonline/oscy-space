import Head from 'next/head'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import Cards from '../components/organisms/Cards'

const data = [
  {
    title: '#1 Basic Cube',
    description: 'Basic cube with react-three-fiber and leva controls.',
    link: '/basic-cube'
  },
  {
    title: '#2 Physics Cube',
    description: 'Basic cube applied with physics from the cannon package.',
    link: '/physics-cube'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscy Space – Proof of Concept</title>
        <meta
          name='description'
          content='This is the proof of concept for Oscy Space'
        />
      </Head>
      <main>
        <Header />
        <Cards cards={data} />
      </main>
      <Footer createdByText={'David Fritz & Daniel Burger'} />
    </>
  )
}
