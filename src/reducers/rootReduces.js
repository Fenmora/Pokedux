import { combineReducers } from "redux-immutable";
import pokemonReducer from "./pokemonReducer";
import { uiReducer } from "./ui";

//! combine reducers

const rootReducers = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});

export default rootReducers;
