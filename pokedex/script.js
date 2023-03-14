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

const createPokemonCard = async (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.background = `linear-gradient(to top, #ffffffdd, ${color}ed 30%)`;

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  pokemonEl.appendChild(imgContainer);
  const img = document.createElement('img');
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
  img.alt = name;
  imgContainer.appendChild(img);
  const info = document.createElement('div');
  info.classList.add('info');
  pokemonEl.appendChild(info);
  const number = document.createElement('span');
  number.classList.add('number');
  number.innerText = `#${id}`;
  info.appendChild(number);
  const nameEl = document.createElement('h3');
  nameEl.classList.add('name');
  nameEl.innerText = name;
  info.appendChild(nameEl);
  const small = document.createElement('small');
  small.classList.add('type');
  info.appendChild(small);
  const span = document.createElement('span');
  span.innerText = type;
  small.appendChild(span);
  pokeContainer.appendChild(pokemonEl);
};

const setLoadMore = (url) => {
  nextPage.setAttribute('data-url', url.next);
  if (!url.previous) {
    prevPage.style.display = 'hidden';
  } else {
    prevPage.style.display = 'block';
    prevPage.setAttribute('data-url', url.previous);
  }
};

const getAllPokemons = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  setLoadMore(data);

  function createPokemonObject(results) {
    results.forEach(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      createPokemonCard(data);
    });
  }
  createPokemonObject(data.results);
};

nextPage.addEventListener('click', (e) => {
  const url = e.target.getAttribute('data-url');
  pokeContainer.innerHTML = '';
  getAllPokemons(url);
});

prevPage.addEventListener('click', (e) => {
  const url = e.target.getAttribute('data-url');
  pokeContainer.innerHTML = '';
  getAllPokemons(url);
});

getAllPokemons(defaultPokeUrl);
