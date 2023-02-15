const projects = [
  {
    id: 1,
    icon: '🗂',
    name: 'Expanding Cards',
    url: './expanding_cards/index.html',
    description: 'Simple expanding cards with HTML, CSS and JavaScript',
  },
  {
    id: 2,
    icon: '👣',
    name: 'Progress Steps',
    url: './progress-steps/index.html',
    description: 'Simple progress steps with HTML, CSS and JavaScript',
  },
  {
    id: 3,
    icon: '🐶',
    name: 'Rotating Nav Animation',
    url: './rotating-nav-animation/index.html',
    description: 'Simple rotating nav animation with HTML, CSS and JavaScript',
  },
  {
    id: 4,
    icon: '📸',
    name: 'Blurry Loading',
    url: './blurry-loading/index.html',
    description: 'Simple loader animation with HTML, CSS and JavaScript',
  },
  {
    id: 5,
    icon: '📜',
    name: 'Scroll Animation',
    url: './scroll-animation/index.html',
    description: 'Simple scroll animation with HTML, CSS and JavaScript',
  },
  {
    id: 6,
    icon: '📉',
    name: 'Split Landing Page',
    url: './split-landing-page/index.html',
    description: 'Simple split landing page with HTML, CSS and JavaScript',
  },
  {
    id: 7,
    icon: '🌊',
    name: 'Form Input Wave',
    url: './form-input-wave/index.html',
    description: 'Simple form input wave animation with HTML, CSS and JavaScript',
  },
  {
    id: 8,
    icon: '🔊',
    name: 'Sound Board',
    url: './sound-board/index.html',
    description: 'Simple sound board with HTML, CSS and JavaScript',
  },
  {
    id: 9,
    icon: '🃏',
    name: 'Dad Jokes',
    url: './dad-jokes/index.html',
    description: 'Simple dad jokes with HTML, CSS and JavaScript',
  },
  {
    id: 10,
    icon: '⌨️',
    name: 'Event Keycodes',
    url: './event-keycodes/index.html',
    description: 'Simple event keycodes with HTML, CSS and JavaScript',
  },
  {
    id: 11,
    icon: '🧞‍♀️',
    name: 'Magic Hover Effect',
    url: './magic-hover/index.html',
    description: 'Simple magic hover effect with HTML, CSS and JavaScript',
  },
];

const container = document.getElementById('container');

projects.forEach((project) => {
  const cardLink = document.createElement('a');
  cardLink.href = project.url;
  const card = document.createElement('div');
  card.classList.add('card');
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const cardImg = document.createElement('div');
  cardImg.classList.add('card-img');
  const cardImgIcon = document.createElement('h2');
  cardImgIcon.classList.add('card-img-icon');
  cardImgIcon.textContent = project.icon;
  const cardInfoWrapper = document.createElement('div');
  cardInfoWrapper.classList.add('card-info-wrapper');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const cardInfoTitle = document.createElement('div');
  cardInfoTitle.classList.add('card-info-title');
  const cardInfoTitleText = document.createElement('h3');
  cardInfoTitleText.textContent = project.name;
  const cardInfoDescription = document.createElement('h4');
  cardInfoDescription.textContent = project.description;
  container.appendChild(cardLink);
  cardLink.appendChild(card);
  card.appendChild(cardContent);
  cardContent.appendChild(cardImg);
  cardImg.appendChild(cardImgIcon);
  cardContent.appendChild(cardInfoWrapper);
  cardInfoWrapper.appendChild(cardInfo);
  cardInfo.appendChild(cardInfoTitle);
  cardInfoTitle.appendChild(cardInfoTitleText);
  cardInfoTitle.appendChild(cardInfoDescription);
});

const cards = document.querySelectorAll('.card');

container.addEventListener('mousemove', (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
