import Layout from '../components/Layout.js';
import '../styles/globals.css';

export const metadata = {
  icons: {
    icon: '../public/favicon.ico'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
