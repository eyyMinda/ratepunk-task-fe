import Image from "next/image";
import extensionStyles from '../../styles/pages/Home/Extension.module.scss';
import { Icon } from '@iconify/react';

function Extension({ styles }) {
  return (
    <div id='extension' className={extensionStyles.app}>
      <div className={extensionStyles.app_container}>
        <a href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk' className={extensionStyles.box}>
          <Image src="/chrome.svg" alt="Chrome app store" width={60} height={60} layout={'fixed'} />
          <div>
            <small>available in the</small>
            <b>chrome web store</b>
          </div>
        </a>
        <a href='https://apps.apple.com/app/ratepunk/id1607823726' className={extensionStyles.box}>
          <Image src="/apple.svg" alt="Apple app store" width={60} height={60} layout={'fixed'} />
          <div>
            <small>available in the</small>
            <b>apple app store</b>
          </div>
        </a>
        <div className={extensionStyles.rating}>
          <div>{[...Array(5)].map((_, i) => <Icon className={extensionStyles.star} icon="ion:star" width="23" height="23" key={i} />)}</div>
          <big>Chrome Store reviews</big>
        </div>
      </div>
    </div>
  )
}

export default Extension;