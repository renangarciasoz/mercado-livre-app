import { SET_SEARCH_VALUE } from "../actions/type";

export default (state = "", action = {}) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return action.searchValue;
    default:
      return state;
  }
};
