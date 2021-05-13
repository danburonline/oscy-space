import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscy Space – Proof of Concept</title>
        <meta
          name='description'
          content='This is the proof of concept for Oscy Space'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href='https://github.com/danburonline/oscy-space'>Oscy Space</a>
        </h1>

        <p className={styles.description}>ThreeJS example scenes</p>

        <div className={styles.grid}>
          <a href='/basic-cube' className={styles.card}>
            <h2>#1 Basic Cube &rarr;</h2>
            <p>
              Basic cube with <code>react-three-fiber</code> and{' '}
              <code>leva</code> controls.
            </p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Scene 2 &rarr;</h2>
            <p>Neque est ut quo rerum aperiam quas. Natus nulla in harum.</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}>
            <h2>Scene 3 &rarr;</h2>
            <p>Neque est ut quo rerum aperiam quas. Natus nulla in harum.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h2>Scene 4 &rarr;</h2>
            <p>Neque est ut quo rerum aperiam quas. Natus nulla in harum.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Created by <b>Daniel Burger & David Fritz</b>
        </p>
      </footer>
    </div>
  )
}
