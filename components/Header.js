import Image from 'next/image';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.scss';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <div className={headerStyles.header}>
      <header>
        <Link href='/'>
          <a>
            <Image style={{ cursor: 'pointer' }} src="/logo.svg"
              alt="RatePunk Logo" width={125} height={32} />
          </a>
        </Link>
        <HeaderNav />
      </header>
    </div>
  )
}

export default Header;