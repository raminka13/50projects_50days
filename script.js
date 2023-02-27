import { projects } from './projects.js';

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
