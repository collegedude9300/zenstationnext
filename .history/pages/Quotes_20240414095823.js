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
  return (
    <div className="container">