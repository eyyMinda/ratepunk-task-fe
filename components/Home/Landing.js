import css from '../../styles/pages/Home/Landing.module.scss';
import Steps from "./steps";
import ReferralForm from "./referral_form";

function Landing() {
  return (
    <div id='landing' className={css.landing}>
      <div className={css.landing_container}>

        <div className={css.formCard}>
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p>Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>

          <ReferralForm />
          <small>Limits on max rewards apply.</small>
        </div>

        <Steps css={css} />
      </div>
    </div>
  )
}

export default Landing;