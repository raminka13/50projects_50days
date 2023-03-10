const container = document.getElementById('container');
const SQUARES = 400;

function getRandomColor() {
  const h = Math.floor(Math.random() * 255);
  const s = Math.floor(50 + Math.random() * 40);
  const l = Math.floor(40 + Math.random() * 30);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

for (let i = 0; i < SQUARES; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
}