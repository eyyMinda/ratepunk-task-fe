import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <div className={headerStyles.header}>
      <header>
        <a href='/'>
          <Image style={{ cursor: 'pointer' }} src="/logo.svg"
            alt="RatePunk Logo" width={125} height={32} />
        </a>
        <HeaderNav />
      </header>
    </div>
  )
}

export default Header;