import './App.css';
import { useRef, useState } from 'react';
import PokemonItem from './PokemonItem';

 function App() {
  const searchField = useRef();

  const maxPokemon = 150;
  const ids = new Array(maxPokemon);
  for (let i=1; i<=maxPokemon; i++) {
    ids[i-1] = i;
  };

  const handleSearch = (val) => {
    // TODO: HANDLE SEARCH 
    console.log(val);
    searchField.current.value = "";
  };

  return (
    <div className="App">
      <h1>Pokemon!</h1>
      <div className="search">
        <input 
          ref={searchField}
          placeholder="Search for pokemon..."
        />
        <button onClick={()=>handleSearch(searchField.current.value)}>Search</button>
      </div>
      <div>
        {ids.map((id) => <PokemonItem id={id}/>)}
      </div>
    </div>
  );
}

export default App;
