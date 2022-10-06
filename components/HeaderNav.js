import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss';

function HeaderNav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='#extension'>Chrome Extension</Link>
        </li>
        <li>
          <Link href='#'>Price Comparison</Link>
        </li>
        <li>
          <Link href='#'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav;