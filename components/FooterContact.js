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
        <div className={footerStyles.socialBoxes}>
          <div><Image src='/instagram.svg' alt="email icon" width={16} height={16} /></div>
          <div><Image src='/facebook.svg' alt="email icon" width={16} height={16} /></div>
          <div><Image src='/linkedin.svg' alt="email icon" width={16} height={16} /></div>
          <div><Image src='/twitter.svg' alt="email icon" width={16} height={16} /></div>
          <div><Image src='/tiktok.svg' alt="email icon" width={16} height={16} /></div>
        </div>
      </div>
    </div>
  )
}

export default FooterContact;