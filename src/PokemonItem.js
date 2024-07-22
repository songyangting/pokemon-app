import { useState, useEffect } from "react";

export default function PokemonItem({ id }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetchPokemonById(id);
    }, [id]);

    async function fetchPokemonById(id) {
        const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
    }

    if (pokemon) return (
        <div>
            <img 
                src={pokemon.sprites.front_default}
                alt="pokemon sprite image"
            />
            <h3>{`#${pokemon.id}: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`}</h3>
            <p>{`Species: ${pokemon.species.name}`}</p>
        </div>
    )

}