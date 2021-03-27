import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonPreview from "./PokemonPreview";
import "../App.css";

function PokemonList() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    fetchItems();
  }, [offset]);

  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchItems = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );

    const items = await data.json();

    setItems(items.results);
  };
  // const [count ,setCount] = useState(1);
  function nextClick(e) {
    e.preventDefault();
    setOffset(offset + 20);
    setPageNumber(pageNumber + 1);
  }
  function previousClick(e) {
    e.preventDefault();
    if (offset >= 20) {
      setOffset(offset - 20);
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div className="pokemon-list">
    
        <h1>Pokemon List</h1>
        <h4>Page Number: {pageNumber}</h4>
        <button onClick={previousClick}>Previous Page</button>
        <button onClick={nextClick}>Next Page</button>
      <div className="container" id="pokemon-list-container">
        
        {items
          ? items.map((pokemon, index) => (
              <h1 key={index + 1}>
                <Link to={`/pokemons/${pokemon ? parseInt(pokemon.url.replace(/[^0-9]/g,'').substring(1)):null}`}>
                  <PokemonPreview fetchurl={pokemon.url} />
                </Link>
              </h1>
            ))
          : null}
        
      </div>
    </div>
  );
}

export default PokemonList;
