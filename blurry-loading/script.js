const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

bg.style.opacity = '0';
// eslint-disable-next-line max-len
const scale = (num, inMin, inMax, outMin, outMax) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
let load = 0;

function blurring() {
  load += 1;

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.opacity = scale(load, 0, 100, 0, 1);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

window.addEventListener('load', () => {
  const int = setInterval(blurring, 30);
  if (load > 99) (clearInterval(int));
});
