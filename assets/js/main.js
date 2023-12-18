const pokemonList = document.getElementById('pokemonList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const limit = 21;
let offset = 0;

function convertPokemonToDom(pokemon) {
    return `
    <div class="pokemon ${pokemon.type}">
        <div class="container2">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        </div>
        <div class="container3">
            <div class="types">
                ${pokemon.types.map((type) => `<span class="${type}">${type}</span>`).join('')}
            </div>
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </div>
    `
}

function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToDom).join('')
    })
}

loadPokemons(offset, limit)

loadMoreBtn.addEventListener('click', () => {
    offset += limit;
    loadPokemons(offset, limit)
})