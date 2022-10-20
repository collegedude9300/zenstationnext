
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'


export default function Contact() {
return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
      <h1> Contact Me: </h1>
    <form name="contact" method="POST" data-netlify="true">
      <p> <label>Your Name: <input type="text" name="name" /></label>    </p>
      <p> <label>Your Email: <input type="email" name="email" /></label> </p>
      <p> <label>Message: <textarea name="message"></textarea></label>   </p>
      <p> <button type="submit" class="btn btn-primary">Send</button>    </p>
    </form>
    <h5>Do you want to go back to the home page?</h5>
    <Link href="/"> 
    <a class="btn btn-success">Home</a>
    </Link>
      </main>
    </div>
  )
}