import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { validateEmail } from "../../functions/validateEmail";
import landingStyles from '../../styles/pages/Home/Landing.module.scss';

const jsonbin = 'https://api.jsonbin.io/v3/b/6342c3210e6a79321e227306';
const token = '$2b$10$7aVmVzUhEWgpa7IxiTztfO/GZJbAj7AcvDsj.73jCCLuO4d13iNwi'
const axiosHeaders = {
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key": token
  }
};

function Landing() {
  const [lastEmail, setLastEmail] = useState('');
  const [msg, setMsg] = useState({});

  const submit = e => {
    e.preventDefault()
    const { text, type } = validateEmail(lastEmail);
    setMsg({ text, type });
    if (type === 'error') return;
    const data = JSON.stringify({ lastEmail });
    axios.put(jsonbin, data, axiosHeaders);
  }

  const copy = e => {
    e.preventDefault();
    const referral = 'https://ratepunk.com/referral';
    navigator.clipboard.writeText(referral);
  }

  return (
    <div id='landing' className={landingStyles.landing}>
      <div className={landingStyles.landing_container}>

        {/*///////////////// FORM //////////////// */}
        <div className={landingStyles.formCard}>
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p>Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>

          <form>
            {/*//////////Display Messages///////// */}
            {msg.type === 'error' ? <span className={landingStyles.msgErr}>{msg.text}</span> :
              msg.type === 'success' ? (<span className={landingStyles.msg}>
                <Image src='/success.svg' alt="success icon" width={32} height={32} /> {msg.text}
              </span>) : null}
            {/*//////////Input with Copy Btn//////// */}
            {msg.type === 'success' ? <div className={landingStyles.ref}>https://ratepunk.com/referral
              <button className={landingStyles.copy} onClick={copy}>Copy</button></div> :
              <div>
                <Image src='/email.svg' alt="email icon" width={20} height={16} />
                <input type='email' value={lastEmail} onChange={e => setLastEmail(e.target.value)}
                  placeholder='Enter your email address' />
              </div>}
            {/*///////////Copy Btn for Mobile///////// */}
            {msg.type === 'success' ? <button className={landingStyles.copySmall}
              onClick={copy}>Copy URL</button> :
              <button onClick={submit}>Get Referral Link</button>}
          </form>
          <small>Limits on max rewards apply.</small>
        </div>

        {/*///////////////// STEPS //////////////// */}
        <div className={landingStyles.steps}>
          <div className={landingStyles.step}>
            <div className={landingStyles.img}>
              <Image src="/invite.svg" alt="Invite icon" width={128} height={140} layout={'fixed'} />
            </div>
            <div className={landingStyles.stepInfo}>
              <b>STEP 1</b>
              <h2>INVITE FRIENDS</h2>
              <p>Refer friends with your unique referral link.</p>
            </div>
          </div>
          <div className={landingStyles.step}>
            <div className={landingStyles.img}>
              <Image src="/collect-coins.svg" alt="Collect coins icon" width={144} height={144} layout={'fixed'} />
            </div>
            <div className={landingStyles.stepInfo}>
              <b>STEP 2</b>
              <h2>COLLECT COINS</h2>
              <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
            </div>
          </div>
          <div className={landingStyles.step}>
            <div className={landingStyles.img}>
              <Image src="/voucher.svg" alt="Voucher icon" width={144} height={107} layout={'fixed'} />
            </div>
            <div className={landingStyles.stepInfo}>
              <b>STEP 3</b>
              <h2>GET VOUCHER</h2>
              <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;