import React, { useState } from 'react'
import { Header, Main, Footer } from './components'
import './App.css'
import equipment from './json/equipmentList.json'

function App() {
  
  let idCounter = 1
  const [products, setProducts] = useState([
      ...equipment["Security & Life Safety"].map(product => ({ 
          ...product, 
          id: idCounter++, 
          style: { backgroundColor: "rgba(0, 153, 255, 0.3)" } 
      })),
      ...equipment["Automation"].map(product => ({ 
          ...product, 
          id: idCounter++,
          style: { backgroundColor: "rgba(102, 255, 102, 0.3)" } 
      })),
      ...equipment["Video Surveillance"].map(product => ({ 
          ...product, 
          id: idCounter++ ,
          style: { backgroundColor: "rgba(153, 51, 255, 0.3)" }
      }))
  ]);
  return (
    <div>
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  )
}

export default App
