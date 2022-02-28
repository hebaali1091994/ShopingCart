import React from 'react'
import Modal from "react-modal"
function OrderModal(props) {
    const{order,closeModal,cartItem}=props
  return (
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
                {cartItem.reduce((a, p) => {
                  return a + p.price ;
                }, 0)}$ 
              </td>
            </tr>
            <tr>
            <td>
              Selected Items:
            </td>
              <td>
                {cartItem.map((p) => (
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

  )
}
export default  OrderModal