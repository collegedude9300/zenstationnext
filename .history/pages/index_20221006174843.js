import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.pages}>
        <h1> Welcome to the Zen Center!</h1>
        <br/>
        <h4>Bio: </h4>
        <h4> Nature and Enlightenment: </h4>
        <h4>Self Reflection and Notes: </h4>
        <h4>Zen Enrichment for Upper Education: </h4>
        <h4>Contact Me: </h4>
      </main>
    </div>
  )
}
