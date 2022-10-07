import Image from "next/image";
import extensionStyles from '../../styles/pages/Home/Extension.module.scss';
function Extension({ styles }) {
  return (
    <div id='extension' className={extensionStyles.app}>
      <div className={extensionStyles.app_container}>
        <div className={extensionStyles.box}>
          <Image src="/chrome.svg" alt="Chrome app store" width={60} height={60} />
          <div>
            <small>available in the</small>
            <b>chrome web store</b>
          </div>
        </div>
        <div className={extensionStyles.box}>
          <Image src="/apple.svg" alt="Apple app store" width={60} height={60} />
          <div>
            <small>available in the</small>
            <b>apple app store</b>
          </div>
        </div>
        <div className={extensionStyles.rating}>
          <div>{[...Array(5)].map((_, i) => <i className="fa-solid fa-star" key={i}></i>)}</div>
          <big>Chrome Store reviews</big>
        </div>
      </div>
    </div>
  )
}

export default Extension;