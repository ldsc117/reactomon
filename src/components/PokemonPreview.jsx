import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card"

function PokemonPreview({match, fetchurl }) {

    const [item, setItem] = useState();  
  useEffect(() => {
    fetchItem();
  },[item]);

 

  const [sprites, setSprites] = useState();
  const [types, setTypes] = useState();
  const [stringbody, setStringBody] = useState();

  const fetchItem = async () => {
    const data = await fetch(
      fetchurl
    );

  

    if (data.ok) {
      const item = await data.json();
      setItem(item);
      
      setSprites(item ? item.sprites : null);
      setTypes(item.types);


    //   console.log(species.name);
    }
 
  };

  return (
    <div className="pokemon-preview">
    <Card 
      title={item ? item.name: null}
      imageUrl={sprites ? sprites.front_default : null}
      body={ types ? 'Pokemon type: ' + types.map((type) => type.type.name).join(', ')
      : null}
      /> 
    </div>
  );
}

export default PokemonPreview;