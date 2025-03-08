import React, {useState} from 'react'
import ProductItem from './ProductItem'
import styles from '../styles/Main.module.css'

export default function ProductList() {
    const [products, setProducts] = useState([
            { id: 1, name: "Laptop", price: 999, description:"Electronic mobile pc" },
            { id: 2, name: "Phone", price: 699, description:"Electronic mobile phone" },
            { id: 3, name: "Headphones", price: 199, description:"Electronic audio device" }
        ]);
    return (
    <div className={styles.productsContainer}>
        <h3>ProductList:</h3>
        
        <ProductItem products={products}/>
    </div>
  )
}
