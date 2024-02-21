import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/Header.module.scss';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <div className={css.header}>
      <header>
        <Link href='/'>
          <Image src="/logo.svg" alt="RatePunk Logo" width={125} height={32} />
        </Link>
        <HeaderNav />
      </header>
    </div>
  )
}

export default Header;