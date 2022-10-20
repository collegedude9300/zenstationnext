
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
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
        <Image  alt="A black book in a grey background."src="/bout.jpg" width="200" height="200"/>
        <br/>
        <Link href="/About" class="btn btn-success">
          <a>About Us</a>
        </Link>
        <h4> Nature and Enlightenment: </h4>
        <Image  alt="A small purple flower ."src="/flower.jpg" width="200" height="200"/>
        <br/>
        <Image  alt="An animated blue cat."src="/cartooncat.png" width="200" height="200"/>
        <br/>
        <Link href="/MenuNature" class="btn btn-success">
          <a>Menu for the Nature site</a>
        </Link>
        <h4> Quotes: </h4>
        <Image alt="asdf" src="/quotes.png" width="200" height="200"/>
        <br/>
        <Link href="/Quotes" class="btn btn-success">
          <a>Quotes</a>
        </Link>
        <h4>Contact Me: </h4>
        <Image  alt="A yellow sticky note saying Call Me."src="/contact.png" width="200" height="200"/> 
        <br/>
        <Link href="/Contact" class="btn btn-success">
          <a>Contact Us</a>
        </Link>
      </main>
    </div>
  )
}