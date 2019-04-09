import history from "../routes/history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import items from "./items";

export const Reducers = combineReducers({
  items,
  router: connectRouter(history)
});