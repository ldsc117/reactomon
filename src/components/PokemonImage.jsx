import React, { useState, useEffect } from "react";
import "../App.css";

function PokemonImage({ match }) {
  useEffect(() => {
    fetchItem();

   
  }, []);

  const [item, setItem] = useState();

  const fetchItem = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${match.params.id}/`
    );


    if (data.ok) {

      const item = await data.json();  
      setItem()
    }
    
  };

  return (
    <div>
        {/* <img src={item.sprites.front_default}></img> */}
      
    </div>
  );
}

export default PokemonImage;
