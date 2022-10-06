import Image from 'next/image';
import Link from 'next/link';
import footerStyles from '../styles/Footer.module.scss';

function FooterContact() {
  return (
    <div className={footerStyles.contacts}>
      <div>
        <h3>CONTACT</h3>
        <Image src='/email-footer.svg' alt="email icon" width={16} height={12.8} />
        <span> hi@ratepunk.com</span>
      </div>
      <div>
        <h3>SOCIAL</h3>
        <ul className={footerStyles.socialBoxes}>
          <li><a href='#'><Image src='/instagram.svg' alt="email icon" width={16} height={16} /></a></li>
          <li><a href='#'><Image src='/facebook.svg' alt="email icon" width={16} height={16} /></a></li>
          <li><a href='#'><Image src='/linkedin.svg' alt="email icon" width={16} height={16} /></a></li>
          <li><a href='#'><Image src='/twitter.svg' alt="email icon" width={16} height={16} /></a></li>
          <li><a href='#'><Image src='/tiktok.svg' alt="email icon" width={16} height={16} /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterContact;