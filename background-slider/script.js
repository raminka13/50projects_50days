const { body } = document;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const backgrounds = [
  'https://source.unsplash.com/random/?colors/1920x1080',
  'https://source.unsplash.com/random/?patterns/1920x1080',
  'https://source.unsplash.com/random/?textures/1920x1080',
  'https://source.unsplash.com/random/?landscapes/1920x1080',
  'https://source.unsplash.com/random/?energy/1920x1080',
];

let activeSlide = 0;

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
  slides[activeSlide].style.backgroundImage = `url(${backgrounds[activeSlide]})`;
}

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

rightBtn.addEventListener('click', () => {
  activeSlide += 1;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
  setBgToBody();
});

leftBtn.addEventListener('click', () => {
  activeSlide -= 1;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setBgToBody();
});

setActiveSlide();
setBgToBody();
