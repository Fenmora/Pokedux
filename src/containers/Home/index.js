import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import Loader from "../../components/Loader";
import { fetchPokemonsWithDetails } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
// import { getIn, toJS } from "immutable";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) =>
    state.getIn(["pokemon", "list"])
  ).toJS();
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);
  return (
    <div className="Home">
      <Searcher />
      {loading && <Loader />}

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
