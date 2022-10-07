import Image from 'next/image';
import Link from 'next/link';
import footerStyles from '../styles/Footer.module.scss';
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';
import getWidth from '../functions/getWidth';

function Footer() {
  //getWidth ternary functions not effective!
  return (
    <div className={footerStyles.footer}>
      <footer>
        <article>
          <Link href='/'>
            <a>
              <Image src="/logo.svg" alt="RatePunk Logo" width={125} height={32} />
            </a>
          </Link>
          <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
          {getWidth() > 768 ? <small className={footerStyles.copy}>&copy; 2021 Ratepunk. All Rights Reserved.</small> : null}
        </article>
        <FooterNav />
        <FooterContact />
        {getWidth() <= 768 ? <small className={footerStyles.copy}>&copy; 2021 Ratepunk. All Rights Reserved.</small> : null}
      </footer>
    </div>
  )
}

export default Footer;