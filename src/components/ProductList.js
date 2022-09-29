import { useState } from "react";
import ProductInList from "./ProductInList";
import Product from "./Product";
import { HiMenuAlt1 } from "react-icons/hi";

const ProductList = ({ products }) => {
  const [name, setName] = useState("");
  //   const [home, setHome] = useState(false)
  if (products.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  //   onClick={() => setHome(!home)

  const restartList = () => {
    setName("");
  };
  return (
    <div className="products-container">
      <div className="home" onClick={restartList}>
        <HiMenuAlt1 className="menu"/>
      </div>
      {products.map((product) => (
        <div
          className="product-container-list"
          onClick={() => setName(product.name)}
          key={product.id}
        >
          {name === "" ? (
            <ProductInList product={product} />
          ) : name === product.name ? (
            <Product product={product} />
          ) : null}
          {/* {home === true ? <ProductInList product={product} /> : null} */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
