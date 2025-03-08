import React from 'react'
import styles from '../styles/Main.module.css'
export default function ProductItem({products}) {
    return (
        <div className={styles.productsList}>
            {products.map(element => {
                return (
                    <div className={styles.listItem} key={element.id}>
                        <h5>{element.name}</h5>
                        <p>{element.price}</p>
                        <h6>{element.description}</h6>
                    </div>
                )
            })}
        </div>
    )
}