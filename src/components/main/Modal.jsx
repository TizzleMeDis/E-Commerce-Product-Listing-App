import React from 'react'
import styles from '../styles/Main.module.css'

export default function Modal(user) {
  return (
    <div className={styles.modal}>
      <h1>Welcome Back {user.user}!</h1>
    </div>
  )
}
