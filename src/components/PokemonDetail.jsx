import React, { useState, useEffect } from "react";
import "../App.css";

function PokemonDetail({ match }) {
    const [arraySprites, setArraySprites] = useState();
  useEffect(() => {
    fetchItem();
  },[arraySprites]);

  const [item, setItem] = useState();
  const [abilities, setAbilities] = useState();
  const [species, setSpecies] = useState();
  const [sprites, setSprites] = useState();
  const [stats, setStats] = useState();
  

  const fetchItem = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.id}/`
    );

    if (data.ok) {
      const item = await data.json();

      setItem(item);

      const abilities = item.abilities;

      setAbilities(abilities);

      setSpecies(item.species);

      setSprites(item.sprites);

      setStats(item.stats);

      setArraySprites([]);

      const array = [];

      if(sprites){Object.keys(sprites).forEach(function (key) {
        array.push(sprites[key]);});}
      
      
      
      setArraySprites(array);

      //   console.lsog(species.name);
    }
  };

  return (
    <div className="pokemon-details">
      <h1>PokemonDetails</h1>

      {arraySprites ? arraySprites.map((image) =>
      ((typeof image ) == "string")?
      <img src={image} width="150"
      height="150"></img>
      : null
      ) : null}
      <img
        src={sprites ? sprites.front_default : null}
        width="150"
        height="150"
      ></img>
      <h2>Pokemon Name: {item ? item.name : null}</h2>

      <p>
        Pokemon Abilities:{" "}
        {abilities
          ? abilities.map((ability) => ability.ability.name).join(", ")
          : null}
      </p>
      <p>Pokemon Species: {species ? species.name : null} </p>
      <p>
        Pokemon Stats:{" "}
        {stats
          ? stats
              .map((stat) => stat.stat.name + ": " + stat.base_stat)
              .join(", ")
          : null}
      </p>
    </div>
  );
}

export default PokemonDetail;
