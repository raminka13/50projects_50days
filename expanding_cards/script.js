const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

panels.forEach((panel) => {
  panel.addEventListener('mouseover', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});