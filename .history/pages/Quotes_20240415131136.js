import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import InspirationalQuotes from 'inspirational-quotes'
export default function Quotes() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    getNewQuote();
  }, [quote]);

  function getNewQuote() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setQuote(new InspirationalQuotes(data).random());
        } else {
          console.log('Invalid data format');
        }
        setTimeout(getNewQuote, 60 * 1000);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        setTimeout(getNewQuote, 5000); // Retry after 5 seconds
      });
  }

  return (
    <div className="container">
      <h2>Inspiring Quotes</h2>
      <blockquote>{quote ? `"${quote.text}" - ${quote.author}` : "Loading..."}</blockquote>
      <p>
        <button onClick={getNewQuote}>Get New Quote</button>
        <Link href="/">
          <button className="btn btn-success">Home</button>
        </Link>
        <Link href="/">
          <button className="btn btn-success">Home</button>
        </Link>
        <Link href="/">
          <button className="btn btn-success">Home</button>
        </Link>
        <Link href="/">
          <button className="btn btn-success">Home</button>
        </Link>
    </div>
  );
}