import './App.css';
import { useRef, useState, useEffect } from 'react';
import PokemonItem from './PokemonItem';
import Pagination from './Pagination';

 const itemsPerPage = 20;

 function App() {
  const searchField = useRef();
  const [page, setPage] = useState(0);
  const[pokemon, setPokemon] = useState([]);
  

  const maxPokemon = 150;
  const ids = new Array(maxPokemon);
  for (let i=1; i<=maxPokemon; i++) {
    ids[i-1] = i;
  };

  useEffect(()=>{
    fetchPokemonForPage(page)
  }, [page])

  async function fetchPokemonForPage(currPage) {
    const start = currPage * itemsPerPage;
    const end = start + itemsPerPage;
    const idsForPage = ids.slice(start, end);
    
    const pokemonForPage = await Promise.all(
        idsForPage.map((id) => 
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
        )
      )
    setPokemon([...pokemonForPage]);
  }

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
        {pokemon
          ? pokemon.map((pokemon) => 
            <PokemonItem id={pokemon.id} sprite={pokemon.sprites} name={pokemon.name} />)
          : <p>Loading...</p>
        }
      </div>
      <div>
        <Pagination page={page} setPage={setPage}/>
      </div>
    </div>
  );
}

export default App;
