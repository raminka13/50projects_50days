const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const cupsContainer = document.querySelector('.cups');

const waterPerDay = 2000;
const cupsPerDay = 8;

for (let i = 0; i < cupsPerDay; i += 1) {
  const cupDiv = document.createElement('div');
  cupDiv.classList.add('cup');
  cupDiv.classList.add('cup-small');
  cupDiv.innerText = `${Math.floor(waterPerDay / cupsPerDay)} ml`;
  cupsContainer.appendChild(cupDiv);
}

const smallCups = document.querySelectorAll('.cup-small');

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
    liters.innerText = `${(2 - (((waterPerDay / cupsPerDay) * fullCups) / 1000)).toFixed(1)}L`;
  }
}

updateBigCup();

function highlightCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx -= 1;
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

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});