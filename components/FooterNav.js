import navStyles from '../styles/Nav.module.scss';

function FooterNav() {
  return (
    <nav className={navStyles.footerNav}>
      <h3>QUICK LINKS</h3>
      <ul>
        <li>
          <a href='#'>Price Comparison</a>
        </li>
        <li>
          <a href='#extension'>Chrome Extension</a>
        </li>
        <li>
          <a href='#'>How It Works</a>
        </li>
        <li>
          <a href='#'>Ratepunk Blog</a>
        </li>
        <li>
          <a href='#'>Privacy Policy</a>
        </li>
      </ul>
    </nav >
  )
}

export default FooterNav;