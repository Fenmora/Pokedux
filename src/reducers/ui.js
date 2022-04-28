// import { fromJS } from "immutable";
import { SET_ERROR, CLEAR_ERROR } from "../actions/types";
const initialState = {
  error: "",
  loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
