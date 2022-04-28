import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMON, TOGGLE_LOADER } from "../actions/type";

const initialState = fromJS({
  list: [],
  loading: false,
  error: "",
});

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return state.set("list", fromJS(action.payload));

    case SET_FAVORITE:
      const currentPokemonIndex = state
        .get("list")
        .findIndex((elem) => elem.get("id") === action.payload.pokemonId);

      const isFavorite = state.get(["list", currentPokemonIndex, "favorite"]);

      return state.setIn([
        "list",
        currentPokemonIndex,
        "favorite",
        !isFavorite,
      ]);

    //   return { ...state, list: newPokemonList };

    default:
      // return { ...state };
      return state;
  }
};

export default pokemonReducer;
