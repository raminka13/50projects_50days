const addBtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes'));

function randomColor() {
  const h = Math.floor(Math.random() * 255);
  const s = Math.floor(50 + Math.random() * 40);
  const l = Math.floor(40 + Math.random() * 30);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  document.body.appendChild(note);
  const tools = document.createElement('div');
  tools.classList.add('tools');
  tools.style.backgroundColor = randomColor();
  note.appendChild(tools);
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  tools.appendChild(editBtn);
  const editIcon = document.createElement('i');
  editIcon.classList.add('fas', 'fa-edit');
  editBtn.appendChild(editIcon);
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  tools.appendChild(deleteBtn);
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash-alt');
  deleteBtn.appendChild(deleteIcon);
  const main = document.createElement('div');
  main.className = `main ${text ? '' : 'hidden'}`;
  note.appendChild(main);
  const textArea = document.createElement('textarea');
  textArea.className = (text ? 'hidden' : '');
  textArea.placeholder = 'Write Your Note...';
  note.appendChild(textArea);

  textArea.value = text;
  main.innerHTML = text;

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    main.innerHTML = e.target.value;

    updateLS();
  });
}

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => {
  addBtn.classList.add('position');
  addNewNote();
});