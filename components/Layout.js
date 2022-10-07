import Head from 'next/head';
import styles from '../styles/Layout.module.scss';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="RatePunk given task. First time using NextJs and JSONBin" />
        <meta name="keywords" content="HTML, CSS, SASS, JS, NextJs, ReactJs, Responsive"></meta>
        <meta name="author" content="Mindaugas Straksys" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout