import Image from 'next/image';
import css from '../styles/Footer.module.scss';
import Link from 'next/link';

const socials = [
  { src: '/instagram.svg', alt: 'instagram icon' },
  { src: '/facebook.svg', alt: 'facebook icon' },
  { src: '/linkedin.svg', alt: 'linkedin icon' },
  { src: '/twitter.svg', alt: 'twitter icon' },
  { src: '/tiktok.svg', alt: 'tiktok icon' },
]

function FooterContact() {
  return (
    <div className={css.contacts}>
      <div>
        <h3>CONTACT</h3>
        <div className={css.email}>
          <Image src='/email-footer.svg' alt="email icon" width={16} height={16} />
          <span>hi@ratepunk.com</span>
        </div>
      </div>

      <div>
        <h3>SOCIAL</h3>
        <ul className={css.socialBoxes}>
          {socials.map(social =>
            <li key={social.src}><Link href='#'>
              <Image src={social.src} alt={social.alt} width={16} height={16} />
            </Link></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default FooterContact;