import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const pokemons = Array(20).fill("");

  return (
    <Grid.Column mobile={16} tablet={8} Computer={4}>
      <div className="PokemonList">
        {pokemons.map(() => (
          <PokemonCard />
        ))}
      </div>
    </Grid.Column>
  );
};

export default PokemonList;
