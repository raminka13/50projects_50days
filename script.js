const projects = [
  {
    id: 1,
    icon: '🗂',
    name: 'Expanding Cards',
    url: './expanding_cards/',
    description: 'Simple expanding cards with HTML, CSS and JavaScript',
  },
  {
    id: 2,
    icon: '👣',
    name: 'Progress Steps',
    url: './progress-steps/',
    description: 'Simple progress steps with HTML, CSS and JavaScript',
  },
  {
    id: 3,
    icon: '🐶',
    name: 'Rotating Nav Animation',
    url: './rotating-nav-animation/',
    description: 'Simple rotating nav animation with HTML, CSS and JavaScript',
  },
  {
    id: 4,
    icon: '📸',
    name: 'Blurry Loading',
    url: './blurry-loading/',
    description: 'Simple loader animation with HTML, CSS and JavaScript',
  },
  {
    id: 5,
    icon: '📜',
    name: 'Scroll Animation',
    url: './scroll-animation/',
    description: 'Simple scroll animation with HTML, CSS and JavaScript',
  },
  {
    id: 6,
    icon: '📉',
    name: 'Split Landing Page',
    url: './split-landing-page/',
    description: 'Simple split landing page with HTML, CSS and JavaScript',
  },
  {
    id: 7,
    icon: '🌊',
    name: 'Form Input Wave',
    url: './form-input-wave/',
    description: 'Simple form input wave animation with HTML, CSS and JavaScript',
  },
  {
    id: 8,
    icon: '🔊',
    name: 'Sound Board',
    url: './sound-board/',
    description: 'Simple sound board with HTML, CSS and JavaScript',
  },
  {
    id: 9,
    icon: '🃏',
    name: 'Dad Jokes',
    url: './dad-jokes/',
    description: 'Simple dad jokes with HTML, CSS and JavaScript',
  },
  {
    id: 10,
    icon: '⌨️',
    name: 'Event Keycodes',
    url: './event-keycodes/',
    description: 'Simple event keycodes with HTML, CSS and JavaScript',
  },
  {
    id: 11,
    icon: '🧞‍♀️',
    name: 'Magic Hover Effect',
    url: './magic-hover/',
    description: 'Simple magic hover effect with HTML, CSS and JavaScript',
  },
  {
    id: 12,
    icon: '📱',
    name: 'Curtain Nav Menu',
    url: './curtain-menu/',
    description: 'Simple curtain nav menu with HTML, CSS and JavaScript',
  },
  {
    id: 13,
    icon: '🤔',
    name: 'FAQ Collapse',
    url: './faq-collapse/',
    description: 'Simple FAQ collapse with HTML, CSS and JavaScript',
  },
  {
    id: 14,
    icon: '⚡️',
    name: 'Random Choice Picker',
    url: './random-choice-picker/',
    description: 'Simple random choice picker with HTML, CSS and JavaScript',
  },
  {
    id: 15,
    icon: '⏰',
    name: 'Fancy Clock',
    url: './fancy-clock/',
    description: 'Simple fancy clock with HTML, CSS and JavaScript',
  },
  {
    id: 16,
    icon: '🧭',
    name: 'Animated Navigation',
    url: './animated-navigation/',
    description: 'Simple animated navigation with HTML, CSS and JavaScript',
  },
  {
    id: 17,
    icon: '💯',
    name: 'Incrementing Counter',
    url: './incrementing-counter/',
    description: 'Simple incrementing counter with HTML, CSS and JavaScript',
  },
  {
    id: 18,
    icon: '💧',
    name: 'Drink Water',
    url: './drink-water/',
    description: 'Simple drink water with HTML, CSS and JavaScript',
  },
  {
    id: 19,
    icon: '🎬',
    name: 'Movie App',
    url: './movie-app/',
    description: 'Simple movie app with HTML, CSS and JavaScript',
  },
  {
    id: 20,
    icon: '🎴',
    name: 'Gradient Hover Card',
    url: './gradient-card/',
    description: 'Simple gradient hover card with HTML, CSS and JavaScript',
  },
  {
    id: 21,
    icon: '🌁',
    name: 'Background Slider',
    url: './background-slider/',
    description: 'Simple background slider with HTML, CSS and JavaScript',
  },
  {
    id: 22,
    icon: '🫳🏼',
    name: 'Drag N Drop',
    url: './drag-drop/',
    description: 'Simple drag and drop with HTML, Tailwind and JavaScript',
  },
  {
    id: 23,
    icon: '⌚️',
    name: 'Theme Clock',
    url: './theme-clock/',
    description: 'Simple theme clock with HTML, CSS and JavaScript',
  },
  {
    id: 24,
    icon: '🦋',
    name: 'Button Ripple Effect',
    url: './button-ripple-effect/',
    description: 'Simple button ripple effect with HTML, CSS and JavaScript',
  },
];

const container = document.getElementById('container');

projects.forEach((project) => {
  const cardLink = document.createElement('a');
  cardLink.href = project.url;
  cardLink.classList.add('card');
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
  cardLink.appendChild(cardContent);
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
