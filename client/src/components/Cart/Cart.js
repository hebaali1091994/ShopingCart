import React from "react";
import "../../css/Cart/Cart.css";
export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title"> {props.cartItem.length===0?'Empty Cart':<p>there is {props.cartItem.length}in cart</p>}  </div>
      <div className="cart-items">
        {props.cartItem.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imgUrl} />
            <div className="cart-info">
              <p>Title:{item.title}</p>
              <p>quntity: {item.quntity}</p>
              <p> price:${item.price}</p>
            </div>
            <button onClick={()=>props.remveProductfrmCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
