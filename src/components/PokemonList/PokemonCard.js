import React from "react";
import { useDispatch } from "react-redux";
import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { setFavorite } from "../../actions";
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from "../../utils/constants";
import "./style.css";

/**
 * *Important information is highlight
 * ! Do not use
 * ? Should do this
 * Todo: refactor this method
 * @param myparam
 * */

export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
    // dispatch(
    //   setFavorite({ pokemonId: pokemon.id, favorite: pokemon.favorite })
    // );
  };
  // console.log(pokemon);
  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;
  if (!pokemon) return null;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <button className="PokemonCard-favorite" onClick={handleFavorite}>
          <Icon name="favorite" color={color}></Icon>
        </button>

        <Image
          centered
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
