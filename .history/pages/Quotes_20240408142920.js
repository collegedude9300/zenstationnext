import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import InspirationalQuotes from 'inspirational-quotes'
import Link from 'next/link'
export default function Quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const newQuote = InspirationalQuotes.getRandomQuote();
    setQuote(newQuote.text);
  }, []);

  return (
    <div>
      
      <h2>Random Quotes:</h2>
      <h4>
        <p> &quot; </p>
        <div className="quote">{quote}</div>
        <p> &quot; </p>
      </h4>
    </div>
  );
}