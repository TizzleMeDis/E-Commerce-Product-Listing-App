import React, {useState} from 'react'
import ProductItem from './ProductItem'
import styles from '../styles/Products.module.css'

export default function ProductList({products}) {
    
    return (
    <div className={styles.productsContainer}>
        <h1 className={styles.productsHeader}>ProductList:</h1>
        <ProductItem products={products}/>
    </div>
  )
}
