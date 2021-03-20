import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PokemonDetail />
      <PokemonList />
      {/* <TypeList />  */}
    </div>
  );
}

export default App;
