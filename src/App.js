import './App.css';
import './mediaquery.css'
import { products as data } from "./data/products";
import { useState, useEffect } from "react";
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <div className="App">
      <ProductList products={products}/>
    </div>
  );
}

export default App;
