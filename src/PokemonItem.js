

export default function PokemonItem({ id, sprite, name }) {
    return (
        <div>
            <img 
                src={sprite.front_default}
                alt="pokemon sprite image"
            />
            <h3>{`#${id}: ${name.charAt(0).toUpperCase() + name.slice(1)}`}</h3>
            {/* <p>{`Species: ${pokemon.species.name}`}</p> */}
        </div>
    )

}