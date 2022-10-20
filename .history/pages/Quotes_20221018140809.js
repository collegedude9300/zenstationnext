import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function Quotes() 
{
          //api for ZenQuotesIO quotes
          const quoteUrl="https://zenquotes.io";    
  const getNewQuote = async () =>
  {
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

        <div className="container">
            <h1>
            <i className="fas fa-quote-left"></i>
            <span className="quote" id="quote"></span>
            <i className="fas fa-quote-right"></i>
            </h1>
            <p className="author" id="author"></p>
            <hr/>
            <div className="buttons">
                <button className="next" onClick="getNewQuote()">Next quote</button>
            </div>
        </div>
<div/>
<h5>Do you want to go back to the home page?</h5>
<Link href="/"> 
<a>Home</a>
</Link>
</main>
</div>
)}