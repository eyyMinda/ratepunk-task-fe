import Image from 'next/image';
import Extension from '../components/Home/Extension';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.landing_container}>
          hello
        </div>
      </div>
      <Extension styles={styles} />
    </>
  )
}
