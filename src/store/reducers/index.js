import { combineReducers } from "redux";
import history from "../../routes/history";
import { connectRouter } from "connected-react-router";

import products from "./products";
import searchValue from "./searchValue";

export const Reducers = combineReducers({
  searchValue,
  products,
  router: connectRouter(history)
});
