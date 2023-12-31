import PropTypes from 'prop-types';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
export default function About({ title, description, homePageUrl, className, bio }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.pages}>
        <h1 className={className}> Bio: </h1>
        <p>{bio}</p>
        <h5>Do you want to go back to the home page?</h5>
        <Link href={homePageUrl}>
          <a className={buttonClassName}>Home</a>
        </Link>
      </main>
    </div>
  );
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  homePageUrl: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};