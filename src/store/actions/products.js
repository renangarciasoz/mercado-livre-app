import axios from "axios";
import { SET_PRODUCTS, SET_PRODUCT, SET_LOADING_PRODUCTS } from "./type";

export function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    products: data
  };
}

export function setProduct(product) {
  return {
    type: SET_PRODUCT,
    product: product
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
      .get(`http://localhost:4000/api/items?search=${getState().searchValue}`)
      .then(res => {
        dispatch(setProducts(res.data[0].items));
      })
      .finally(() => {
        dispatch(setLoadingProducts(false));
      });
  };
}

export function getProduct(id) {
  return async dispatch =>
    await axios
      .get(`http://localhost:4000/api/items/${id}`)
      .then(res => dispatch(setProduct(res.data[0].item)));
}
