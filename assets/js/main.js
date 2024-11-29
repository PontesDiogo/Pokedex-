const offset = 0;
const limit = 151;
const url = `https://pokeapi.co/api/v2/pokemon?offset=&{offset}&limit=${limit}`

function ConvertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon ">
                <span class="number">${pokemon?.id}</span>
                <span class="name">${pokemon?.name}</span>
                <div class="detail">
                 <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type.type.name}</li>`).join('')}
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemon.id}.png"
                        alt="${pokemon.name}">

                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')
let isLoading = true

fetch(url).then(async (response) => {
    const pokemonsReponse = await response.json();
    const pokemons = pokemonsReponse.results

    console.log(pokemons[1])

    for (let i = 0; i < 10; i++) {
        const object = pokemons[i]
        const pokemonDetails = await fetch(object.url)
        const pokemon = await pokemonDetails.json()
        console.log(pokemon)
        pokemonList.innerHTML += ConvertPokemonToHtml(pokemon)
    }
}).catch((error) => console.log(error))
.finally(() => isLoading = false)


fetch(url)



