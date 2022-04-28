// import axiosInstance from "./config";
import axiosInstance from "../services/axios";

export const getPokemons = (limit = 151) =>
  axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const getPokemonsWithDetails = (pokemons) => {
  return Promise.all(
    pokemons.map((pokemon) => axiosInstance.get(pokemon.url))
  ).then((pokemonResponses) => {
    return pokemonResponses.map((response) => response.data);
  });
};
