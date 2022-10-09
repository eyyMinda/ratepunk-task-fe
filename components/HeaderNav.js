import { useState } from 'react';
import navStyles from '../styles/Nav.module.scss';

function HeaderNav() {
  const [active, setActive] = useState(false);

  return (
    <nav className={active ? [navStyles.nav, navStyles.open].join(' ') : navStyles.nav} onClick={() => setActive(!active)}>
      <div className={navStyles.bar1}></div>
      <div className={navStyles.bar2}></div>
      <div className={navStyles.bar3}></div>
      <ul id="header__menu">
        <li>
          <a href='#extension'>Chrome Extension</a>
        </li>
        <li>
          <a href='#'>Price Comparison</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav;