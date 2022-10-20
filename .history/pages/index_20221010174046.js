/* eslint-disable @next/next/no-html-link-for-pages */
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
        <br/>
        <p> INSERT PHOTO HERE</p>
        <a href="/"> About</a>
        <h4> Nature and Enlightenment: </h4>
        <br/>
        <p> INSERT PHOTO  HERE</p>
        <p> INSERT PHOTO  HERE</p>
        <a href="/MenuNature"> Nature Site</a>
        <h4> Quotes: </h4>
        <br/>
        <p> INSERT PHOTO  HERE</p>
        <a href="Quotes"> Quotes</a>
        <h4>Self Reflection and Notes: </h4>
        <br/>
        <h4>Contact Me: </h4>
        <br/>
        <a href="Contact"> Contact Me</a>
      </main>
    </div>
  )
}
