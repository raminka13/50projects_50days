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
  {
    id: 3,
    name: 'Rotating Nav Animation',
    url: './rotating-nav-animation/index.html',
    description: 'Simple rotating nav animation with HTML, CSS and JavaScript',
  },
  {
    id: 4,
    name: 'Blurry Loading',
    url: './blurry-loading/index.html',
    description: 'Simple loader animation with HTML, CSS and JavaScript',
  },
  {
    id: 5,
    name: 'Scroll Animation',
    url: './scroll-animation/index.html',
    description: 'Simple scroll animation with HTML, CSS and JavaScript',
  },
  {
    id: 6,
    name: 'Split Landing Page',
    url: './split-landing-page/index.html',
    description: 'Simple split landing page with HTML, CSS and JavaScript',
  },
  {
    id: 7,
    name: 'Form Input Wave',
    url: './form-input-wave/index.html',
    description: 'Simple form input wave animation with HTML, CSS and JavaScript',
  },
  {
    id: 8,
    name: 'Sound Board',
    url: './sound-board/index.html',
    description: 'Simple sound board with HTML, CSS and JavaScript',
  },
  {
    id: 9,
    name: 'Dad Jokes',
    url: './dad-jokes/index.html',
    description: 'Simple dad jokes with HTML, CSS and JavaScript',
  },
];

const container = document.querySelector('.container');

projects.forEach((project) => {
  const card = document.createElement('div');
  const cardNumber = document.createElement('h3');
  const cardTitle = document.createElement('a');
  card.classList.add('card');
  cardNumber.classList.add('card-number');
  cardNumber.textContent = project.id;
  cardTitle.classList.add('card-title');
  cardTitle.textContent = project.name;
  cardTitle.href = project.url;
  container.appendChild(card);
  card.appendChild(cardNumber);
  card.appendChild(cardTitle);
});
