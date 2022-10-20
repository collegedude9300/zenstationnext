import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'picstyle.css'
import 'style.css'
import Link from 'next/link'
export default function Flower() {
return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
      <h1>Zen Center: Flowers</h1>
<div className="flower">
  <div className="flower__head">
    <div className="flower__eye left">
      <span></span>
    </div>
    <div className="flower__nose"></div>
    <div className="flower__eye right">
      <span></span>
    </div>
  </div>
  <div className="flower__leaf"></div>

  <div className="flower__leaf oposite"></div>

  <div className="flower__stem"></div>
</div>
      </main>
      </div>
)}