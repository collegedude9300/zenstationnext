import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import InspirationalQuotes from 'inspirational-quotes'
import Link from 'next/link'
export default function Quotes() {
  const [quote, setQuote] = useState('');

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