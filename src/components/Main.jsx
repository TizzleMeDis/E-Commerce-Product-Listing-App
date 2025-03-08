import React from 'react'
import {ProductList, Modal, Banner} from './main/index'
import styles from './styles/Main.module.css'

export default function Main() {
    return (
    <div className={styles.mainSection}>
        <h1 className={styles.companyName}>Secure Home Solutions</h1>
        <div className={styles.bannerModalContainer}>
          <Banner/>
          <Modal />
        </div>
        <ProductList />
    </div>
  )
}
