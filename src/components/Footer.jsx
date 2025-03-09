import React from 'react'
import styles from './styles/Footer.module.css'
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactContainer}>
        <h3 className={styles.contactHeader}>Contact:</h3>
        <p className={styles.contactInfo}>+1 (234) 567 - 9876</p>
        <p className={styles.contactInfo}>securehomesolutions@email.com</p>
        <h3 className={styles.formHeader}>Comments, Concerns:</h3>
        <form className={styles.contactForm} action={'#'} method={"POST"}>
            <label className={styles.labels} htmlFor="full-name">Name:</label>
            <input className={styles.inputs} type="text" placeholder="Your Name" name="full-name" required/>
            <label className={styles.labels} htmlFor="user-email">Email:</label>
            <input className={styles.inputs} type="email" placeholder="Enter Email" name="user-email" required/>
            <label className={styles.labels} htmlFor="message">Message:</label>
            <textarea className={styles.inputs} name="message" placeholder="What would you like to share?" rows="3" required></textarea>
            <input className={styles.inputs} type="submit" value="Submit"/>
        </form>
      </div>
      <div className={styles.disclaimerContainer}>
        <article>
          Disclaimer: This website is for informational purposes only and does not provide advice, recommendations, or endorsements for purchasing home security equipment. 
          I am simply an employee of a company that offers pricing information, which is subject to change. If you're interested in home security products, I encourage you 
          to conduct your own research, as these products are widely available and may offer benefits. However, I do not profit from any purchases you make. Please note that 
          installing security equipment carries risks, including potential damage to yourself, your home, or your belongings. If you have any questions or need an accurate 
          estimate for your home, contact a professional home security company. I am not responsible for any issues that arise from your decisions or actions.
        </article>
      </div>
      <div className={styles.badgeContainer}>
      <svg
        className={styles.bannerLogo}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="ewCr7pYAhfu1"
        viewBox="0 0 256 256"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <path
          d="M11.302,21.6149c.2214.1291.3321.1937.4883.2272.1213.026.2981.026.4194,0c.1562-.0335.2669-.0981.4883-.2272C14.646,20.4784,20,16.9084,20,12v-5.4c0-.55793,0-.8369-.1074-1.04952-.0952-.1885-.2439-.33896-.4313-.43639-.2113-.1099-.495-.11325-1.0625-.11996C15.4272,4.95899,13.7136,4.71361,12,3C10.2864,4.71361,8.57279,4.95899,5.6012,4.99413c-.56747.00671-.85121.01006-1.06255.11996-.18736.09743-.33606.24789-.43126.43639C4,5.7631,4,6.04207,4,6.6v5.4c0,4.9084,5.35396,8.4784,7.302,9.6149Z"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.6012,10.883856C6.133825,11.00677,11.122168,5.050221,12,4.994129s5.7308,5.973227,6.3988,5.889727"
          transform="translate(0 0.000001)"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M6.585765,10.196207v.687651v5.537532h10.941952l-.026622-9.344587"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.302,16.42139v-2.553308l1.396-.039062v2.59237"
          transform="translate(.000001 0)"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <path
          d="M7.716633,10.883858v2.085787l2.8125-.039064v-2.046728l-2.8125.000005Z"
          transform="translate(0 0.000004)"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.380696,12.930585v-2.046723l2.929687-.000001.039063,2.085787-2.96875-.039063Z"
          transform="translate(0 0.000001)"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.25"
          strokeLinejoin="round"
        />
        <path
          d="M7.716633,11.926753h2.8125"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.15"
        />
        <path
          d="M13.380696,11.926753h2.929687"
          transform="translate(0 0.000001)"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.15"
        />
        <path
          d="M14.865071,12.930585v-2.046722"
          transform="translate(.000001 0)"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.15"
        />
        <path
          d="M9.122883,12.969649v-2.085786"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.15"
        />
      </svg>

      </div>
    </div>
  )
}
