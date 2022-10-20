
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

export default function Contact() {

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
      <h1> Contact Me: </h1>

    <form name="contact" method="POST" data-netlify="true">
    <div id="wrapper">      
            <div id="successMessage">Form completed!</div>            
            <div id="errorMessage"> ERROR!</div>           
            <div class="form-element">
        
			<label for="firstName">First Name</label>
			<input type="text" name="firstName" id="firstName" placeholder="Bob"/>                
			
			<label for="lastName">Last Name</label>
			<input type="text" name="lastName" id="lastName" placeholder="Bobbson"/>                
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="eg. yourname@gmail.com"/>
</div>
</div>
    </form>
    <br/>
    <h5>Do you want to go back to the home page?</h5>
    <Link href="/"> 
    <a class="btn btn-success">Home</a>
    </Link>
      </main>
    </div>
  )
}