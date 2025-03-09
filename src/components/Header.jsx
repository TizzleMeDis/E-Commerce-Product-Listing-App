import React from 'react'
import logo from '../assets/shield.svg'
import styles from './styles/Header.module.css'
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} className={styles.logo}/>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>Home</div>
        <div className={styles.link}>About</div>
        <div className={styles.link}>Shopping Cart</div>
        <div className={styles.link}>Account</div>
      </div>
      
      
    </div>
  )
}
