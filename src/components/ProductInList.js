// import React, { useState } from "react";

// const Product = ({ product }) => {
//   return (
//     <div
//       className="product-container"
//       onClick={() => console.log(product.name)}
//     >
//       <div className=" img-container">
//         <img src={product.img} className="product-img" />
//       </div>
//       <div className="container">
//         <h1 className="product-name">
//           {product.name}
//         </h1>
//         <span className="product-price">$ {product.price}</span>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from "react";

const ProductInList = ({ product }) => {
  return (
    <>
      <div className="img-container-list">
        <img
          src={product.img}
          className="product-img-list"
          alt={product.name}
        />
      </div>
      <div className="container-info-list">
        <h1
          className="product-name-list"
          onClick={() => console.log("hice click")}
        >
          {product.name}
        </h1>
        <span className="product-price-list">$ {product.price}</span>
        <div className="numbers-list-container">
          <h1 className="product-stock-title">Stock: {product.stock}</h1>
        </div>
      </div>
    </>
  );
};

export default ProductInList;
