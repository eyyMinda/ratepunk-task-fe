import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/Footer.module.scss';
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';

function Footer() {
  return (
    <div className={css.footer}>
      <footer>
        <article>
          <Link href='/'>
            <Image src="/logo.svg" alt="RatePunk Logo" width={125} height={32} />
          </Link>
          <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
          <small className={css.copy}>&copy; 2021 Ratepunk. All Rights Reserved.</small>
        </article>

        <FooterNav />
        <FooterContact />
      </footer>
    </div>
  )
}

export default Footer;