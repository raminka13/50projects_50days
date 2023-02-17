const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function disableButton() {
  const tags = document.querySelectorAll('.tag');
  const button = document.querySelector('#random-btn');

  if (tags.length === 1) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function highlightPickedTag(tag) {
  tag.classList.add('picked');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

function removeTag(tag) {
  tag.classList.remove('tag');
}

function createTags(input) {
  const tags = input.split(',').filter((tag) => tag.trim() !== '').map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const tags = document.querySelectorAll('.tag');
  const times = (tags.length / 2) * 3;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightPickedTag(randomTag);
      removeTag(randomTag);
    }, 100);
  }, times * 100);
  disableButton();
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
  disableButton();
});
