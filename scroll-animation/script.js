const container = document.querySelector('.container');
let lastCard = container.lastElementChild;
let boxes = [];

const getRandomColor = (s) => {
  const h = Math.floor(Math.random() * 255);

  return `radial-gradient(hsl(${h}deg, ${s + 40 * 2}%, 70%),hsl(${h}deg, ${s + 40 * 2}%, 60%))`;
};

const populateCards = (num) => {
  for (let i = 0; i < num; i += 1) {
    const div = document.createElement('div');
    const p = document.createElement('h2');

    div.classList.add('box');
    div.style.background = getRandomColor(i);
    p.textContent = 'Content';
    div.appendChild(p);
    container.appendChild(div);
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
      boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        observer.observe(box);
      });
      observer.unobserve(entry.target);
    }
    if (entry.target === lastCard && intersecting) {
      populateCards(3);
      observer.unobserve(lastCard);
      lastCard = document.querySelector('.container').lastElementChild;
      observer.observe(lastCard);
    }
    // if (!intersecting) {
    //   entry.target.classList.remove('show');
    // }
  });
});

populateCards(4);
boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  observer.observe(box);
});
observer.observe(lastCard);
