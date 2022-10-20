
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function Quotes() {
  const getNewQuote = async () =>
  {
        //api for quotes
        var url="https://buddha-api.com/api/random";    

        // fetch the data from api
        const response=await fetch(url);
  }
//https://buddha-api.com/api/random





return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
      <h2> Quotes: </h2>
<div/>
<blockquote> 
If anything is worth doing, do it with all your heart
<footer>
<cite>Buddhah</cite>
</footer>
</blockquote>
<br/>
<blockquote> 
The greater the passion, the greater the Buddha.
<footer>
<cite>Buddhah</cite>
</footer>
</blockquote>
<br/>
<blockquote> 
If you want to climb a mountain, begin at the top.
<footer>
<cite>Buddhah</cite>
</footer>
</blockquote>
<br/>
<h5>Do you want to go back to the home page?</h5>
<Link href="/"> 
<a>Home</a>
</Link>
</main>
</div>
)}