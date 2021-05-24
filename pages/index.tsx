import Head from 'next/head'
import Header from '../components/organisms/Header'
import Cards from '../components/organisms/Cards'
import pageContent from '../pages/api/rooms/roomData.json'

export async function getStaticProps() {
  return {
    props: {
      pageContent
    }
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Oscy Space – Proof of Concept</title>
      </Head>
      <section className='flex flex-col min-h-screen '>
        <main className='flex flex-col justify-center min-h-screen py-20'>
          <Header
            title='Welcome to'
            subTitle='ThreeJS Proof of Concept Scenes'
            linkText='Oscy Space'
            linkUrl='https://github.com/danburonline/oscy-space'
          />
          <Cards cards={props.pageContent} />
        </main>
      </section>
    </>
  )
}
