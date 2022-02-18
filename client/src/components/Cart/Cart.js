import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("test");
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order)
  };
  const handleShange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {" "}
        {props.cartItem.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>there is {props.cartItem.length}in cart</p>
        )}{" "}
      </div>
      <div className="cart-items">
        {props.cartItem.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imgUrl} />
            <div className="cart-info">
              <p>Title:{item.title}</p>
              <p>quntity: {item.quntity}</p>
              <p> price:${item.price}</p>
            </div>
            <button onClick={() => props.remveProductfrmCart(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      {props.cartItem.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            total:
            {props.cartItem.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>select Products</button>
        </div>
      )}

     <Checkout  showForm={showForm} submit={submit} setShowForm={setShowForm}  handleShange={handleShange}/>
    </div>
  );
}
