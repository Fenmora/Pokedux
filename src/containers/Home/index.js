import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import Loader from "../../components/Loader";
import { fetchPokemonsWithDetails } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { fromJS, toJS } from "immutable";

function Home() {
  const dispatch = useDispatch();
  // const pokemons = useSelector((state) => state.list);
  const pokemons = useSelector((state) => state.get("list")).toJS();
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
