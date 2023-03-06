const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const IPSUM_API = 'https://baconipsum.com/api/?type=meat-and-filler&sentences=1&format=text';

let text = '.......';
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx += 1;

  if (idx > text.length) {
    idx = text.length;
  }

  setTimeout(writeText, speed);
}

async function getIpsum() {
  const res = await fetch(IPSUM_API);
  const data = await res.text();
  text = data;
  idx = 1;
}

// eslint-disable-next-line no-return-assign
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
getIpsum();
writeText();