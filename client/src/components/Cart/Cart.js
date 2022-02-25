import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
import Bounce from "react-reveal/Bounce";
import Modal from "react-modal";
import { connect } from "react-redux";
import { remveCart } from "../Store/actions/cart";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    console.log("test");
    const order = {
      name: value.name,
      email: value.email,
    };
    setOrder(order);
  };
  const handleShange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const closeModal=()=>{
    setOrder(false)
  }
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

      {/* modal */}
      <Modal isOpen={order} onRequestClose={closeModal}>
        <div className="order-info">
        <span className="spanModal" onClick={closeModal}>&times;</span>
          <p className="alert-success">order done success</p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{order.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{order.email}</td>
            </tr>{" "}
            <tr>
              <td>Total:</td>
              <td>
                {props.cartItem.reduce((a, p) => {
                  return a + p.price ;
                }, 0)}$ 
              </td>
            </tr>
            <tr>
            <td>
              Selected Items:
            </td>
              <td>
                {props.cartItem.map((p) => (
                  <div className="cart-dat">
                    <p>Number Of Products: {p.quntity}</p>
                    <p>Title Of Products: {p.title}</p>

                  </div>
                ))}
              </td>
              
            </tr>
          </table>
        </div>
      </Modal>

      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItem.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imgUrl} />
              <div className="cart-info">
                <p>Title:{item.title}</p>
                <p>quntity: {item.quntity}</p>
                <p> price:${item.price}</p>
              </div>
              <button onClick={() => props.remveCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      </Bounce>
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

      <Checkout
        showForm={showForm}
        submit={submit}
        setShowForm={setShowForm}
        handleShange={handleShange}
      />
    </div>
  );
}
export default connect(
  (state) => {
    return { cartItem: state.cart.cartItem };
  },
  { remveCart }
)(Cart);
