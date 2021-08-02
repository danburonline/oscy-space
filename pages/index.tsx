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
        <title>Oscy Space – Playground</title>
      </Head>
      <section className='flex flex-col min-h-screen '>
        <main className='flex flex-col justify-center min-h-screen py-20'>
          <Header
            title='Playground of'
            subTitle='React-Three-Fiber Proof of Concept Scenes'
            linkText='Oscy Space'
            linkUrl='https://github.com/danburonline/oscy-space'
          />
          <Cards cards={props.pageContent} />
        </main>
      </section>
    </>
  )
}
