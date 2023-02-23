const listItems = document.querySelectorAll('#list li');
const target = document.querySelector('#target');

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
  event.preventDefault();
  target.classList.add('border-gray-500');
}

function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  target.appendChild(item);
  target.classList.remove('border-gray-500');
}

listItems.forEach((listItem) => {
  listItem.addEventListener('dragstart', dragStart);
});

target.addEventListener('dragover', dragOver);
target.addEventListener('drop', drop);
