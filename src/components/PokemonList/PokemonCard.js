import React from "react";
import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
import "./style.css";

/**
 * *Important information is highlight
 * ! Do not use
 * ? Should do this
 * Todo: refactor this method
 * @param myparam
 * */

export const PokemonCard = ({ pokemon }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR}></Icon>
        <Image
          centered
          // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          src={pokemon.sprites.front_default}
          alt="Pokemon Front"
        />
        <h2 className="Pokemon-Title">{pokemon.name}</h2>
        <Divider />
        {pokemon.types.map((type) => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};
export default PokemonCard;
