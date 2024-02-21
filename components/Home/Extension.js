import css from '../../styles/pages/Home/Extension.module.scss';
import Image from "next/image";
import Link from "next/link";
import Stars from "../UI/stars";

function Extension({ styles }) {
  const apps = [
    {
      id: 1,
      image: "/chrome.svg",
      link: "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk",
      name: "chrome web store"
    },
    {
      id: 2,
      image: "/apple.svg",
      link: "https://apps.apple.com/app/ratepunk/id1607823726",
      name: "apple app store"
    }
  ]

  return (
    <div id='extension' className={css.app}>
      <div className={css.app_container}>
        {apps.map(app =>
          <Link href={app.link} key={app.id} className={css.box}>
            <Image src={app.image} alt={app.name} width={60} height={60} />
            <div>
              <small>available in the</small>
              <b>{app.name}</b>
            </div>
          </Link>
        )}

        <div className={css.rating}>
          <Stars style={css.star} />
          <big>Chrome Store reviews</big>
        </div>
      </div>
    </div>
  )
}

export default Extension;