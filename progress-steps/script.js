const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

function randomColor(cActive) {
  const h = 0;
  const s = 1;
  const l = cActive * 80;

  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  document.body.style.backgroundColor = randomColor(currentActive / circles.length);
}

next.addEventListener('click', () => {
  currentActive += 1;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  if (currentActive === circles.length) {
    next.disabled = true;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive -= 1;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
