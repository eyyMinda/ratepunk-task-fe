import Image from 'next/image';
import footerStyles from '../styles/Footer.module.scss';
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <footer>
        <article>
          <Image src="/logo.svg" alt="RatePunk Logo" width={125} height={32} />
          <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
          <description>&copy; 2021 Ratepunk. All Rights Reserved.</description>
        </article>
        <FooterNav />
        <FooterContact />
      </footer>
    </div>
  )
}

export default Footer;