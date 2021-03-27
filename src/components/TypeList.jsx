import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonPreview from "./PokemonPreview";
import "../App.css";
import './Card.css';


function TypeList() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/type`);
    if (data.ok) {
      const item = await data.json();

      setItem(item.results);
    }
  };

  return (
    <div className="pokemon-list">
      <div className="container" >
        {item
          ? item.map((type) => (
              <Link className="card-container" id="type-container">
                <h1 className="card-content">{type.name}</h1>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default TypeList;
