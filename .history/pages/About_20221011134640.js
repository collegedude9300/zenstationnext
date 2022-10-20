
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function About() {
return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
<h4>Bio</h4>
<p>
My name is Nick Murrin, and I am a graduate from CSUSM with a Bachelors Degree in Computer Science.
My specialty is in Web Development. Recently, I have been working on mindfulness.The benefit of mindfulness is that it connects with being in the moment, and further appreciating life.
While we navigate through our components of our busy lives each day, we do not focus on the present day, due to rushing alot.
Studies show how mindfulness is beneficial to the body, mind, and soul.
</p>

<Link href="/"> 
<a class="btn btn-success">Home</a>
</Link>
</main>
</div>
)}