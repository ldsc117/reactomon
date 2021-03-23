import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';

function PokemonList() {


    useEffect(() => {
        fetchItems();
    });

    const [items,setItems] = useState([]);
    const [offset,setOffset] = useState(0);
    const [pageNumber,setPageNumber] = useState(1);
    

    const fetchItems = async() =>{
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    } 
    // const [count ,setCount] = useState(1);
    function nextClick(e) {
        e.preventDefault();
        setOffset(offset+20);
        setPageNumber(pageNumber+1);
        console.log('Clocked');
    }
    function previousClick(e) {
        e.preventDefault();
        if(offset>=20){
            setOffset(offset-20);
            setPageNumber(pageNumber-1);
        }
        
        console.log('Clocked');
    }

  return (
    <div>
      <h6>PokemonList</h6>
      { items.map((pokemon,index) => (
           
          <h1 key = {index+1}>
              
              <Link to={`/pokemons/${index+1+((pageNumber-1) * 20 )}`}>{pokemon.name}</Link>
              
              </h1>

          
      ))}
      <h4>Page Number: {pageNumber}</h4>
      <button onClick={previousClick}>Previous Page</button>
      <button onClick={nextClick}>Next Page</button>
    </div>
  );
}

export default PokemonList;