import axios from "axios";
import { SET_PRODUCTS, SET_LOADING_PRODUCTS } from "./type";

export function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    products: data
  };
}

export function setLoadingProducts(value) {
  return {
    type: SET_LOADING_PRODUCTS,
    loadingProducts: value
  };
}

export function getProducts() {
  return async (dispatch, getState) => {
    dispatch(setLoadingProducts(true));
    await axios
      .get(`http://localhost:1337/api/items?search=${getState().searchValue}`)
      .then(res => {
        dispatch(setProducts(res.data));
      })
      .finally(() => {
        dispatch(setLoadingProducts(false));
      });
  };
}
