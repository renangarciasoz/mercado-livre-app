import thunk from "redux-thunk";
import { Reducers } from "./reducers";
import history from "../routes/history";
import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reduxImmutableStoreInvariant from 'redux-immutable-state-invariant';

const middlewares = [reduxImmutableStoreInvariant(), routerMiddleware(history), thunk];

const store = createStore(
  connectRouter(history)(Reducers),
  applyMiddleware(...middlewares)
);

export default store;