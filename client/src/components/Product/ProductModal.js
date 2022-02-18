import React from 'react'
import Modal from "react-modal"
import Bounce from "react-reveal/Bounce"
export default function ProductModel(props) {
  const{product,closeModal}=props
  return (
<>
    <Modal isOpen={product} onRequestClose={closeModal}>
    <span className="spanModal" onClick={closeModal}>
      &times;
    </span>
    <Bounce left>
    <div className="product-info">
      <img src={product.imgUrl} alt={product.title} /> 
      <p>{product.title}</p>
      <p>{product.desc}</p>

      <p>{product.price}$</p>
    </div></Bounce>
  </Modal></>
  )
}
