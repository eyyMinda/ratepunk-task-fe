import Image from "next/image";
import landingStyles from '../../styles/pages/Home/Landing.module.scss';

function Landing() {
  return (
    <div id='landing' className={landingStyles.landing}>
      <div className={landingStyles.landing_container}>
        <div className={landingStyles.formCard}>
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
          <form>
            <div>
              <Image src='/email.svg' alt="email icon" width={20} height={16} />
              <input type='email' placeholder='Enter your email address' />
            </div>
            <button>Get Referral Link</button>
          </form>
        </div>
        <div className={landingStyles.steps}>
          <div className={landingStyles.step}>
            <Image src="/invite.svg" alt="Invite icon" width={128} height={140} />
            <div>
              <b>STEP 1</b>
              <h2>INVITE FRIENDS</h2>
              <p>Refer friends with your unique referral link.</p>
            </div>
          </div>
          <div className={landingStyles.step}>
            <div>
              <b>STEP 2</b>
              <h2>COLLECT COINS</h2>
              <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
            </div>
            <Image src="/collect-coins.svg" alt="Collect coins icon" width={144} height={144} />
          </div>
          <div className={landingStyles.step}>
            <Image src="/voucher.svg" alt="Voucher icon" width={144} height={107} />
            <div>
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