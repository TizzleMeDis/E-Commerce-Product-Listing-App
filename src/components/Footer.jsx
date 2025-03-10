import React from 'react'
import styles from './styles/Footer.module.css'
export default function Footer() { //Just small disclamer and form section. Doesn't actually do anything.
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
          <strong>Disclaimer:</strong> This website is for <em>informational purposes only</em> and <b>does NOT</b> provide <em>advice, recommendations, or endorsements</em> for purchasing home security equipment. 
          I am simply an employee of a company that offers pricing information, which is subject to change. If you're interested in home security products, I encourage you 
          to conduct your own research, as these products are widely available and may offer benefits. However, <em>I do <b>NOT profit</b> from any purchases you make.</em> Please note that 
          installing security equipment <strong>carries risks</strong>, including potential <em>damage</em> to <em>yourself, your home, or your belongings.</em> If you have any questions or need an accurate 
          estimate for your home, contact a professional home security company. I am not responsible for any issues that arise from your decisions or actions.
        </article>
      </div>
    </div>
  )
}
