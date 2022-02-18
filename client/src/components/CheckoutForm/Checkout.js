import React from "react";
import "../../css/CheckoutForm/Checkout.css";
import Input from "../Input/Input";

export default function Checkout(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkoutform">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <form onSubmit={props.submit}>
              <Input label="Name" name="name" type="text" onChange={props.handleShange} />
            
              <Input label="Email"  name="email" type="email" onChange={props.handleShange} />
            
            <div className="">
              <button type="submit">Checkout </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
