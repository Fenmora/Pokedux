import {
  SET_POKEMON,
  SET_ERROR,
  CLEAR_ERROR,
  TOGGLE_LOADER,
  SET_FAVORITE,
} from "./type";
import { getPokemons, getPokemonsWithDetails } from "../api/getPokemons";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
  // payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

// export const getPokemonWithDetails = () => (dispatch) => {
//   getPokemons()
//     .then((res) => {
//       const pokemonList = res.results;
//       return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
//     })
//     .then((pokemonResponses) => {
//       const pokemonsData = pokemonResponses.map((response) => response.data);
//       dispatch(setPokemon(pokemonsData));
//     })
//     .catch((error) => {
//       dispatch(setError({ message: "Ocurrió un error", error }));
//     });
// };

export const fetchPokemonsWithDetails = () => async (dispatch) => {
  try {
    dispatch(toggleLoader());
    const response = await getPokemons();
    const pokemons = response.results;
    const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
    dispatch(setPokemon(pokemonsWithDetails));
    dispatch(toggleLoader());
  } catch (error) {
    dispatch(setError({ message: "Oops! Something went wrong.", error }));
    dispatch(toggleLoader());
  }
};
