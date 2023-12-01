import { useEffect, useState } from "react"

async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    return await response.json()
}

async function getResults(url){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
    return await response.json();
}

const PokemonList = (props) => {
    return (
        <ul>
            {
                props.pokemons.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <p>{pokemon.name}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const PokemonsList = () => {

    const [pokemon, setPokemon] = useState({
        pokemons: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokemonList = await getPokemon()

            const vetor = []
            let r = '';

            for(let i = 1; i <= 20; i++){
                r = await getResults(i)
                vetor.push(r)
            }
            
            console.log(vetor)
            setPokemon({
                pokemons: vetor
            })
        }
        fetchData()
    }, [])

    return (
        <div>
            {pokemon.pokemons.length > 0 ? <PokemonList pokemons={pokemon.pokemons} /> : 'nenhum pokemon encontrado'} 
        </div>
    )
}

export default PokemonsList