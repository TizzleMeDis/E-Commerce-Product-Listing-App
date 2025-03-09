import React from 'react'
import styles from '../styles/Main.module.css'
export default function ProductItem({products}) {
    return (
        <div className={styles.productsList}>
            {products.map(element => {
                return (
                    <div className={styles.listItem} key={element.id}>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src={element.picture} />
                        </div>
                        <div className={styles.productInfo}>
                            <h5 className={styles.productName}>{element.name}</h5>
                            <p className={styles.productPrice}>$ {element.price}</p>
                            <h6 className={styles.productDescription}>{element.description}</h6>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}