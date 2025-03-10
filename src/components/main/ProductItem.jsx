import React from 'react'
import styles from '../styles/Products.module.css'
export default function ProductItem({products}) {
    return (
        <div className={styles.productsList}>
            {products.map(element => {
                return (
                    <div className={styles.listItem} key={element.id} style={element.style}> {/** implements personalize and general styles here with tokenizing divs as it maps objects */}
                        <h2 className={styles.productName}>{element.name}</h2>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src={element.picture} />
                        </div>
                        <div className={styles.productInfo}>
                            <ul>
                                {
                                    element.features.map((feature, index) => { // tokenized keys as well here to make sure that I don't recieve errors
                                        return (<li key={index} className={styles.productFeature}>{feature}</li>)
                                    })
                                }
                            </ul>
                            <p className={styles.productPrice}>Price: ${element.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}