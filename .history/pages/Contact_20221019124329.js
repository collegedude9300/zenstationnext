
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

  const validateFirstName = (firstName) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(firstName).toLowerCase());
  }
  //check to see if your last name is valid
  const validateLastName = (lastName) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(lastName).toLowerCase());
  }

//check to see if the email is valid
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (validateEmail(email) && validateFirstName(firstName) && validateLastName(lastName)) {
      alert("Form submitted successfully");
      document.getElementById("email").value = "";
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
    } else {
      alert("Form not submitted");
    }
  }
  }
//check to see if the email is valid
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.pages}>
        <h1 className={styles.title}>
          Contact Me:
        </h1>
        <div className={styles.grid}>
            <form onSubmit={handleSubmit}>
            <br></br>
              <div className="form-group">
              <label htmlFor="firstName">First Name</label>
			<input type="text" name="firstName" id="firstName" placeholder=""/> 
      <br></br>
      <br></br>               
			<label htmlFor="lastName">Last Name</label>
			<input type="text" name="lastName" id="lastName" placeholder=""/> 
      <br></br>
      <br></br>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                <br></br>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <Link href="/"> 
        <a class="btn btn-success">Home</a>
        </Link>
      </main>
      </div>
  )}