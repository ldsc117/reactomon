import React , {useState , useEffect} from 'react';


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


  return (
    <div>
      <h6>PokemonList</h6>
      {items.map(item => (
          <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default PokemonList;