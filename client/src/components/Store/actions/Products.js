import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filterSize = (products, value) => {
  return (dispatch) => {
    let newProducts = [...products];
    let ProductSet = newProducts.filter((p) => p.size.indexOf(value) !== -1);
    dispatch({
      type: FILTER_SIZE,
      data: {
        size: value,
        products: value === "ALL" ? products : ProductSet,
      },
    });
  };
};

export const filterSort = (products, value) => {
  return (dispatch) => {
    let newProducts = [...products];
    let ProductSet = newProducts.sort(function (a, b) {
      if (value === "Lowest") {
        return a.price - b.price;
      } else if (value === "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    dispatch({
      type: FILTER_SORT,
      data: {
        sort: value,
        products: ProductSet,
      },
    });
  };
};

