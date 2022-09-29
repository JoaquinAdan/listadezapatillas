import React, { useState } from "react";

const Product = ({ product }) => {
  const [counter, setCounter] = useState(1);

  if (counter < 1) {
    setCounter(1);
  } else if (counter > product.stock) {
    setCounter(product.stock);
  }

  return (
    <div className="product-container">
      <div className="img-container">
        <img src={product.img} className="product-img" alt={product.name} />
      </div>
      <div className="container-info">
        <div className="container-info-top">
          <div className="details-container">
            <h1 className="detail-title">Producto</h1>
            <span className="detail-text">{product.name}</span>
          </div>
          <div className="details-container">
            <h1 className="detail-title">Cantidad</h1>
            <div className="detail-text">
              <button className="button-counter" onClick={() => setCounter(counter - 1)}>-</button>
              <span className="detail-text">{counter}</span>
              <button className="button-counter" onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          </div>
          <div className="details-container">
            <h1 className="detail-title">Precio</h1>
            <span className="detail-text">
              $ {parseFloat(product.price) * counter}
            </span>
          </div>
        </div>
        <div className="container-info-bot">
          <div className="card-type">
            <h1 className="card-title">Tipo de tarjeta</h1>
          </div>
          <div className="card-number">
            <h1 className="card-title">Numero de tarjeta</h1>
          </div>
          <div className="card-data">
            <h1 className="card-title">VENCIMIENTO</h1>
            <h1 className="card-title CVV">CVV</h1>
          </div>
          <div className="card-button">
            <button className="buy-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
