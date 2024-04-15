import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import InspirationalQuotes from 'inspirational-quotes'
export default function Quotes() {
  const [quote, setQuote] = useState();

  // Get a new quote when the  component mounts and every minute thereafter.
  useEffect(() => {
    
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