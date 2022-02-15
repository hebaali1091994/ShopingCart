import React from "react";
import "../../css/Filter/Filter.css";
export default function Filter() {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="number-of-products">Number Of Products</div>
      <div className="filter-by-size">
        <span>Filter</span>

        <select className="filter-select">
          <option value="All">All</option>
          <option value="XS">Xs</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="Xl">Xl</option>
          <option value="Xxl">Xxl</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>

        <select className="filter-select">
          <option value="latest">latest</option>
          <option value="Lower">Lower</option>
          <option value="Heighest">Heighest</option>
         
        </select>
      </div>
    </div>
  );
}
