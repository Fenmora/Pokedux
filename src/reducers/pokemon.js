import { fromJS } from "immutable";
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from "../actions/types";
const initialState = fromJS({
  list: [],
  error: "",
  loading: false,
});

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
