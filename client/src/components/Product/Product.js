import React, { useEffect, useState } from "react";
import "../../css/Product/Product.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { fetchProducts } from "../Store/actions/Products";
function Product(props) {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <Bounce right cascade>
      <div className="wrapper">
        { props.products.map((product) => (
          <div className="product-item" key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.imgUrl} alt={product.title} />
            </a>
            <div className="producr-desc">
              <p>{product.title}</p>
              <span>{product.price}$</span>
            </div>
            <button onClick={() => props.addToCart(product)}>
              Add To Cart
            </button>
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
        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}
export default connect((state) => {
  return {
    Products: state.products.products,
  };
}, {fetchProducts})(Product);
