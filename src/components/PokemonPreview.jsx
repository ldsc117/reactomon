import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card"

function PokemonPreview({match, fetchurl }) {

    const [item, setItem] = useState();  
  useEffect(() => {
    fetchItem();
  },[item]);

 

  const [sprites, setSprites] = useState();
  const [stats, setStats] = useState();


  const fetchItem = async () => {
    const data = await fetch(
      fetchurl
    );

  

    if (data.ok) {
      const item = await data.json();
      setItem(item);
      
      setSprites(item ? item.sprites : null);
      setStats(item.stats);


    //   console.log(species.name);
    }
 
  };

  return (
    <div className="pokemon-preview">
    <Card 
      title={item ? item.name: null}
      imageUrl={sprites ? sprites.front_default : null}
      body='Lorem ipsum vrajeala'
      /> 
    </div>
  );
}

export default PokemonPreview;