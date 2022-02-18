import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip"
export default function Filter(props) {
  return (
    <Flip left>
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="number-of-products">Number Of Products{props.productsNumber}</div>
      <div className="filter-by-size">
        <span>Filter</span>

        <select  value={props.size} className="filter-select" onChange={props.handleFilterSize}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div   value={props.order}  className="filter-by-size" onChange={props.handleFilterOrder}>
        <span>Order</span>

        <select className="filter-select">
          <option value="latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
         
        </select>
      </div>
    </div>
    </Flip>
  );
}
