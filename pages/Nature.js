import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Zen Station</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.pages}>
          <h1> Nature and Enlightenment</h1>
          <div className={styles.spacing}></div>
        </main>
      </div>
    )
  }