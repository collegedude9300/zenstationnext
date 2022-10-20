
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function Quotes() 
{
  const getNewQuote = async () =>
  {
        //api for quotes
        var url="https://buddha-api.com/api/random";    

        // fetch the data from api
        const response=await fetch(url);

console.log(typeof response);
//convert response to json and store it in quotes array
const allQuotes = await response.json();

// Generates a random number between 0 and the length of the quotes array
const indx = Math.floor(Math.random()*allQuotes.length);

//Store the quote present at the randomly generated index
const quote=allQuotes[indx].text;

//Store the author of the respective quote
const auth=allQuotes[indx].author;

if(auth==null)
{
    author = "Anonymous";
}
//function to dynamically display the quote and the author
text.innerHTML=quote;
author.innerHTML="~ "+auth;
  }
getNewQuote();


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

<h5>Do you want to go back to the home page?</h5>
<Link href="/"> 
<a>Home</a>
</Link>
</main>
</div>
)}