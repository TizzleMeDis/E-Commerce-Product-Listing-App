import React, {useState} from 'react'
import ProductItem from './ProductItem'
import styles from '../styles/Main.module.css'
import equipment from '../../json/equipmentList.json'

export default function ProductList() {
    let idCounter = 1
    const [products, setProducts] = useState([
        ...equipment["Security & Life Safety"].map(product => ({ ...product, id: idCounter++ })),
        ...equipment["Automation"].map(product => ({ ...product, id: idCounter++ })),
        ...equipment["Video Surveillance"].map(product => ({ ...product, id: idCounter++ }))       
    ]);
    return (
    <div className={styles.productsContainer}>
        <h1 className={styles.productsHeader}>ProductList:</h1>
        <ProductItem products={products}/>
    </div>
  )
}
