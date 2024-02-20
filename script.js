const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
};

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getPokemon = async () => {
    const pokemonIds = [25, 6, 94, 87, 24]; // IDs of the chosen Pokemon
    const pokemonContainer = document.querySelector('.pokemon-container');

    for (const id of pokemonIds) {
        const pokemonData = await fetchPokemon(id);
        const pokemonElement = createPokemonElement(pokemonData);
        pokemonContainer.appendChild(pokemonElement);
    }

    const opponentsContainer = document.querySelector('.opponents');
    for (let i = 0; i < 5; i++) {
        const randomPokemonId = generateRandomNumber(1, 500); // ამ API აქვს 500 პოკემონი
        const randomPokemonData = await fetchPokemon(randomPokemonId);
        const opponentElement = createPokemonElement(randomPokemonData);
        opponentsContainer.appendChild(opponentElement);
    }
};

const createPokemonElement = (pokemonData) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <div>
            
            <h3>${pokemonData.name}</h3>
            <p><em>Height:</em> ${pokemonData.height}</p>
            <p><em>Weight:</em> ${pokemonData.weight}</p>
            
        </div>
    `;
    return pokemonElement;
};

    const startBattle = () => {
    alert('Battle started!'); 
};

window.onload = () => {
    getPokemon();
};