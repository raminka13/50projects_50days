const projects = [
  {
    id: 1,
    name: 'Expanding Cards',
    url: './expanding_cards/index.html',
    description: 'Simple expanding cards with HTML, CSS and JavaScript',
  },
  {
    id: 2,
    name: 'Progress Steps',
    url: './progress-steps/index.html',
    description: 'Simple progress steps with HTML, CSS and JavaScript',
  },
];

const container = document.querySelector('.container');

projects.forEach((project) => {
  const card = document.createElement('div');
  const cardTitle = document.createElement('a');
  card.classList.add('card');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = project.name;
  cardTitle.href = project.url;
  container.appendChild(card);
  card.appendChild(cardTitle);
});