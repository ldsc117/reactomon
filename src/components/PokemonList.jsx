import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';

function PokemonList() {


    useEffect(() => {
        fetchItems();
    }, []);

    const [items,setItems] = useState([]);

    const fetchItems = async() =>{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    } 
    // const [count ,setCount] = useState(1);


  return (
    <div>
      <h6>PokemonList</h6>
      { items.map((pokemon,index) => (
           
          <h1 key = {index+1}>
              
              <Link to={`/pokemons/${index+1}`}>{pokemon.name}</Link>
              
              </h1>

          
      ))}
    </div>
  );
}

export default PokemonList;