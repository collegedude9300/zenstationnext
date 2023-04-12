import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function Quotes() 
{
  {
    const api_url ="https://zenquotes.io/api/random/7d8df7dcfa04b16cee2fd5c471f78ce7";
    async function getNewQuote(url)
    {
      const response = await fetch(url);
      var data = await response.json();
      console.log(data);
      document.getElementById("quote").innerHTML = data[0].q;
      document.getElementById("author").innerHTML = data[0].a;
    }
    getNewQuote(api_url);
return (
    <div className={styles.container}>
      <Head>
        <title>Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
      <h1> Random Quotes: </h1>
        <div className={styles.container}>
            <h4>
            <p> &quot;</p>
            <div className="quote" id="quote"></div> 
            <p> &quot;</p>
            </h4>
            <h5><p className="author" id="author"></p> </h5>     
            <hr/>
        </div>
<div/>
<h5>Do you want to go back to the home page?</h5>
        <Link href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
</main>
</div>
)}}