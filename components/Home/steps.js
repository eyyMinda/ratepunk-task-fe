import Image from 'next/image'

export default function Steps({ css }) {
  const steps = [
    { stepNum: 1, image: "/invite.svg", alt: "Invite Icon", w: 128, h: 140, title: "INVITE FRIENDS", description: "Refer friends with your unique referral link." },
    { stepNum: 2, image: "/collect-coins.svg", alt: "CollectCoins Icon", w: 144, h: 144, title: "COLLECT COINS", description: "Get 1 coin for each friend that installs our extension using your referral link." },
    { stepNum: 3, image: "/voucher.svg", alt: "Voucher Icon", w: 144, h: 107, title: "GET VOUCHER", description: "Redeem for a $20 hotel booking voucher once you collect 20 coins." },
  ]
  return (
    <div className={css.steps}>
      {steps.map(step =>
        <div key={step.stepNum} className={css.step}>
          <div className={css.img}>
            <Image src={step.image} alt={step.alt} width={step.w} height={step.h} />
          </div>
          <div className={css.stepInfo}>
            <b>STEP {step.stepNum}</b>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        </div>)}
    </div>
  )
}

