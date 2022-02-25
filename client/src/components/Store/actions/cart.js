import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItem = getState().cart.cartItem;
    const newProducts = [...cartItem];
    var isProductExist = false;
    newProducts.forEach((p) => {
      if (p.id === product.id) {
        p.quntity++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      newProducts.push({ ...product, quntity: 1 });
    }

    dispatch({
      type: ADD_CART,
      data: {
        cartItem: newProducts,
      },
    });
    localStorage.setItem("cartItem", JSON.stringify(newProducts));
  };
};

export const remveCart = (product) => {
  return (dispatch, getState) => {
    const cartItem = getState().cart.cartItem;
    const newProducts = [...cartItem];
    const updatItem=newProducts.filter((p) => p.id !== product.id)
    dispatch({
      type: REMOVE_CART,

      data: { cartItem: updatItem },
    });
    localStorage.setItem("cartItem", JSON.stringify(updatItem));
  };
};
