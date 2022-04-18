import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";

import { getPokemonWithDetails } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getPokemonWithDetails());
    // getPokemons()
    //   .then((res) => {
    //     const pokemonList = res.results;
    //     return Promise.all(
    //       pokemonList.map((pokemon) => axios.get(pokemon.url))
    //     );
    //   })
    //   .then((pokemonResponses) => {
    //     const pokemonsWithDetails = pokemonResponses.map(
    //       (response) => response.data
    //     );
    //     dispatch(setPokemon(pokemonsWithDetails));
    //   })
    //   .catch((error) => {
    //     dispatch(setError({ message: "Ocurrió un error", error }));
    //   });
  }, []);
  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
