import React from 'react'
import {ProductList, Modal, Banner} from './main/index'
import styles from './styles/Main.module.css'

export default function Main({products}) {
    return (
    <div className={styles.mainSection}>
      <div className={styles.bannerImageContainer}>
        <img src={"https://media.istockphoto.com/id/871704344/photo/mobile-connect-with-security-camera.jpg?s=612x612&w=0&k=20&c=ZqLmm0tORU-rGt0DC9bw3lORPZv6z3CUzWtVTOtpCC8="} className={styles.bannerImage}/>
        <img src={"https://media.istockphoto.com/id/1312912134/photo/house-living-smart-home.jpg?s=612x612&w=0&k=20&c=wyaw8_oRoyOxOAxCdm2wC6SGkzyvuvfruFy7Z6K1jSk="} className={styles.bannerImage}/>
        <img src={"https://media.istockphoto.com/id/1188875450/vector/smart-home-technology-conceptual-banner-building-consists-digits-and-connected-with-icons-of.jpg?s=612x612&w=0&k=20&c=p-8BEDSOYEG4F9yXFzPo2vIq6GCXIyC9_GZtmgCaQcU="} className={styles.bannerImage}/> 
        <img src={"https://media.istockphoto.com/id/1412400653/photo/man-setting-an-alarm-code-for-home-security.jpg?s=612x612&w=0&k=20&c=pucxXYfXRitHWLmdh73Lw1dzoGXq4n2TUR5KzP1p1Bg="} className={styles.bannerImage}/>
      </div>
      <h1 className={styles.companyName}>Secure Home Solutions</h1>
      <div className={styles.bannerModalContainer}>
          <Banner/>
          <Modal />
        </div>
        <ProductList products={products} />
    </div>
  )
}
