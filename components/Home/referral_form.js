import Image from "next/image";
import { useState } from "react";
import { validateEmail } from "../../functions/validateEmail";
import css from "../../styles/pages/Home/Landing.module.scss";

export default function ReferralForm() {
  const [code, setCode] = useState(null);
  const [lastEmail, setLastEmail] = useState('');
  const [msg, setMsg] = useState({});

  const submit = async e => {
    e.preventDefault()
    const { text, type } = validateEmail(lastEmail);
    setMsg({ text, type });
    if (type === 'error') return;

    const res = await fetch('api/get_referral', {
      method: "POST",
      body: JSON.stringify({ lastEmail })
    });
    const { code, message } = await res.json();

    if (code) setCode(code);
    setMsg({ text: message, type: code ? type : 'error' });
  }

  const copy = e => {
    e.preventDefault();
    if (!code) { setMsg({ text: "No referral code has been generated.", type: "error" }); return; }
    navigator.clipboard.writeText(code);
  }

  return (
    <form>
      {/* ================ Display Messages ================ */}
      {msg.type === 'error' ? <span className={css.msgErr}>{msg.text}</span> :
        msg.type === 'success' ?
          (<span className={css.msg}>
            <Image src='/success.svg' alt="success icon" width={32} height={32} />{msg.text}
          </span>) : null}

      {/* ================ Input with Copy Btn ================ */}
      {msg.type === 'success' ?
        <>
          <div className={css.ref}>{code}
            <button className={css.copy} onClick={copy}>Copy</button>
          </div>
          <button className={css.copySmall} onClick={copy}>Copy URL</button>
        </>
        :
        <>
          <div>
            <Image src='/email.svg' alt="email icon" width={20} height={16} />
            <input type='email' value={lastEmail} onChange={e => setLastEmail(e.target.value)}
              placeholder='Enter your email address' />
          </div>
          <button onClick={submit}>Get Referral Link</button>
        </>
      }
    </form>
  )
}
