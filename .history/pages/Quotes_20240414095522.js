import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import InspirationalQuotes from 'inspirational-quotes'
export default function Quotes() {
  const [quote, setQuote] = useState('')

  // Generate a new quote every time the component mounts or updates
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