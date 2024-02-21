import css from '../styles/Layout.module.scss';
import Footer from './Footer';
import Header from './Header';

export const metadata = {
  title: "Ratepunk Hiring Task",
  description: "RatePunk given task. First time using NextJs and JSONBin.",
  keywords: "HTML, CSS, SASS, JS, NextJs, ReactJs, Responsive",
  author: "eyyMinda",
  viewport: "width=device-width, initial-scale=1.0"
}

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={css.container}>
        <main className={css.main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout