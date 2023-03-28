const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const cupsContainer = document.querySelector('.cups');
const goal = document.getElementById('goal');
let waterPerDay = localStorage.getItem('goal') || 2000;
let smallCups = [];

const cupsPerDay = 8;

function updateSmallCups() {
  cupsContainer.innerHTML = '';
  for (let i = 0; i < cupsPerDay; i += 1) {
    const cupDiv = document.createElement('div');
    cupDiv.classList.add('cup');
    cupDiv.classList.add('cup-small');
    cupDiv.innerText = `${Math.floor(waterPerDay / cupsPerDay)} ml`;
    cupsContainer.appendChild(cupDiv);
  }
  smallCups = document.querySelectorAll('.cup-small');

  smallCups.forEach((cup, idx) => {
    // eslint-disable-next-line no-use-before-define
    cup.addEventListener('click', () => highlightCups(idx));
  });
}

updateSmallCups();

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${Math.floor((fullCups / totalCups) * 100)}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${((waterPerDay / 1000) - (((waterPerDay / cupsPerDay) * fullCups) / 1000)).toFixed(2)}L`;
  }
}

updateBigCup();

function highlightCups(idx) {
  if (idx === cupsPerDay - 1 && smallCups[idx].classList.contains('full')) idx -= 1;
  else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx -= 1;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

goal.addEventListener('input', (e) => {
  localStorage.setItem('goal', e.target.value * 1000);
  waterPerDay = e.target.value * 1000;
  updateBigCup();
  updateSmallCups();
});
