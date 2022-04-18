import React from "react";
import { Grid, Icon, Image, Label } from "semantic-ui-react";
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
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Pokemon Front"
        />
        <p className="Pokemon-Title">{pokemon.name}</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
};
export default PokemonCard;
