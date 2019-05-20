import { SET_SEARCH_VALUE } from "./type";

export function setSearchValue(value) {
  return {
    type: SET_SEARCH_VALUE,
    searchValue: value
  };
}
