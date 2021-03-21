import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/pokemons" component={PokemonList}/>
      {/* <PokemonDetail /> */}
     
      <Route path="/types" component={TypeList} /> 
      </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
