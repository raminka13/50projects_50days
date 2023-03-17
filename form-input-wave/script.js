const labels = document.querySelectorAll('.form-control label');
const container = document.querySelector('.container');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 20}ms">${letter}</span>`)
    .join('');
});

window.addEventListener('load', () => {
  container.classList.add('loaded');
});