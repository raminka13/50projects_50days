const navBtn = document.getElementById('nav-toggle');

const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
};

navBtn.addEventListener('click', toggleNav);