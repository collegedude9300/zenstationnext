import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import InspirationalQuotes from 'inspirational-quotes'
export default function Quotes() {
  const [quote, setQuote] = useState();

  // Get a new quote when the  component mounts and every minute thereafter.
  useEffect(() => {
    let intervalId = setInterval(getNewQuote, 60 * 1000);
    return () => clearInterval(intervalId);
    }, []);
  
  function getNewQuote() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => setQuote(new InspirationalQuotes(data).random()))
      .catch((error) => console.log(`Error: ${error}`));
  }
  useEffect(() => {
    try {
      const newQuote = InspirationalQuotes.getRandomQuote();
      setQuote(newQuote.text);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h2>Random Quotes:</h2>
      <p> &quot; </p>
      <blockquote className="quote">{quote}</blockquote>
      <p> &quot; </p>
    </div>
  );
}