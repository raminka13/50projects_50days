const pokeContainer = document.getElementById('poke-container');
const defaultPokeUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#86b3f3',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

const createPokemonCard = async (poke) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
  const data = await res.json();
  const pokemon = data;
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
      <div class="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${name}">
      </div>
      <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type"><span>${type}</span> </small>
      </div>
      `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  pokeContainer.appendChild(pokemonEl);
};

const fetchPokemons = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const pokeArr = data.results;

  for (let i = 0; i < pokeArr.length; i += 1) {
    createPokemonCard(pokeArr[i]);
  }

  nextPage.setAttribute('data-url', data.next);
  if (!data.previous) {
    prevPage.style.display = 'hidden';
  } else {
    prevPage.style.display = 'block';
    prevPage.setAttribute('data-url', data.previous);
  }
};

nextPage.addEventListener('click', (e) => {
  const url = e.target.getAttribute('data-url');
  pokeContainer.innerHTML = '';
  fetchPokemons(url);
});

prevPage.addEventListener('click', (e) => {
  const url = e.target.getAttribute('data-url');
  pokeContainer.innerHTML = '';
  fetchPokemons(url);
});
fetchPokemons(defaultPokeUrl);
