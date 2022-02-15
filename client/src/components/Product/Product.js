import React, { useState } from "react";
import "../../css/Product/Product.css";
import ProductModal from "./ProductModal";
export default function Product(props) {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    <div className="wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imgUrl} alt={product.title} />
          </a>
          <div className="producr-desc">
            <p>{product.title}</p>
            <span>{product.price}$</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}
      {/* <Modal isOpen={product} onRequestClose={closeModal}>
        <span className="spanModal" onClick={closeModal}>
          &times;
        </span>
        <div className="product-info">
          <img src={product.imgUrl} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.desc}</p>

          <p>{product.price}$</p>
        </div>
      </Modal> */}
      <ProductModal product={product} closeModal={closeModal}/>
      
    </div>
  );
}
