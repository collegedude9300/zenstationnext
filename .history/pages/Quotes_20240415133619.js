import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
export default function Quotes() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    getNewQuote();
  }, []);

  function getNewQuote() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setQuote(data[randomIndex]);
        } else {
          console.log('Invalid data format');
        }
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  useEffect(() => {
    const timer = setTimeout(getNewQuote, 60 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let retryDelay = 5000; // Initial retry delay in milliseconds
  let maxRetryDelay = 60000; // Maximum retry delay in milliseconds
  let retryCount = 0; // Number of retries
  let maxRetries = 10; // Maximum number of retries

  function handleFetchError(error) {
    console.log(`Error: ${error}`);
    if (retryCount < maxRetries) {
      retryDelay = Math.min(retryDelay * 2, maxRetryDelay); // Exponential backoff
      retryCount++;
      setTimeout(getNewQuote, retryDelay);
    } else {
      console.log('Max retries exceeded');
    }
  }

  return (
    <div className={styles.container} id="quote-box">
      <h2>Inspiring Quotes</h2>
      <blockquote>{quote ? `"${quote.text}" - ${quote.author}` : "Loading..."}</blockquote>
      <p>
        <button onClick={getNewQuote}>Get New Quote</button>
        <Link href="/">
          <button className="btn btn-success">Home</button>
        </Link>
      </p>
    </div>
  );
}