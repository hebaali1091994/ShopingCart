import React from "react";
import "../../css/Product/Product.css"
export default function Product(props) {
  return (
    <div className="wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          
            <img src={product.imgUrl} alt={product.title} />
            <div className="producr-desc">
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
            <button>Add To Cart</button>
          </div>
       
      ))}
    </div>
  );
}
