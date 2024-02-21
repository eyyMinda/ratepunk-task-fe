import { useState } from 'react';
import css from '../styles/Nav.module.scss';
import Link from 'next/link';

function HeaderNav() {
  const [active, setActive] = useState(false);

  return (
    <nav className={active ? [css.nav, css.open].join(' ') : css.nav} onClick={() => setActive(!active)}>
      <div className={css.bar1}></div>
      <div className={css.bar2}></div>
      <div className={css.bar3}></div>

      <ul id="header__menu">
        <li><Link href='#extension'>Chrome Extension</Link></li>
        <li><Link href='#'>Price Comparison</Link></li>
        <li><Link href='#'>Blog</Link></li>
      </ul>
    </nav>
  )
}

export default HeaderNav;