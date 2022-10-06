import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss';

function FooterNav() {
  return (
    <nav className={navStyles.footerNav}>
      <h3>QUICK LINKS</h3>
      <ul>
        <li>
          <Link href='#'>Price Comparison</Link>
        </li>
        <li>
          <Link href='#extension'>Chrome Extension</Link>
        </li>
        <li>
          <Link href='#'>How It Works</Link>
        </li>
        <li>
          <Link href='#'>Ratepunk Blog</Link>
        </li>
        <li>
          <Link href='#'>Privacy Policy</Link>
        </li>
      </ul>
    </nav >
  )
}

export default FooterNav;