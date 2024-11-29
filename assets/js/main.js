const offset = 0;
const limit = 151;
const url = `https://pokeapi.co/api/v2/pokemon?offset=&{offset}&limit=${limit}`

function ConvertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">Grass</li>`).join('')}
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/1.png"
                        alt="${pokemon.name}">

                </div>
            </li>
    `
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .then((pokemonList) =>{
        for(let i =0; i<pokemonList.length; i++){
            const pokemon = pokemonList[i]
            console.log(ConvertPokemonToHtml(pokemon))

            document.getElementByIdClassName('pokemons').innerHTML += ConvertPokemonToHtml(pokemon)
        }
    })

    .catch((error) => console.log(error))




