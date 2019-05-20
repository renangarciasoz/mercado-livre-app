import { SET_PRODUCTS, SET_LOADING_PRODUCTS } from "../actions/type";

const initialState = {
  loadingProducts: false,
  products: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case SET_LOADING_PRODUCTS:
      return { ...state, loadingProducts: action.loadingProducts };
    default:
      return state;
  }
};
